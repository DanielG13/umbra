const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Menu = db.menu;
const SubMenu = db.sub_menu;

const Op = db.Sequelize.Op;

var to = require("await-to-js");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 6),
    id_company: req.body.company
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = async function(req, res) {
  const user = await User.findOne({
    where: {
      username: req.body.username
    }
  });
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      console.log(user.roleId);

      const role = await Role.findOne({
          where: {
            id: user.roleId
          }
        });

      let menu = []
      let menus = await (role.getMenus());
      let subMenus = await SubMenu.findAll();
      for await (const item of menus) {
        menu.push({menu: item, sub_menu: await SubMenu.findAll({
            where: {
              menuId: item.id
            }
          })});
      }
            //ENVIO DE RESPUESTAS OK
            res.status(200).send({
              id: user.id,
              username: user.username,
              email: user.email,
              name: user.name,
              lastname: user.last_name,
              roles: role.name,
              menus: menu,
              accessToken: token
            });
};
