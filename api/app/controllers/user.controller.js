const db = require("../models");
const config = require("../config/auth.config");
const Role = db.role;
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.index = async (req, res) => {
  const Users = await User.findAll();
  if (!Users) {
    return res.status(404).send({ User: [] });
  }

  let Userr = []
  for await (const item of Users) {
    let rl = await Role.findAll({
        where: {
          id: item.id
        }
      });
    Userr.push({user: item, role: rl[0] });
  }
        //ENVIO DE RESPUESTAS OK
        res.status(200).send({
          User: Userr,
        });

};

exports.create = (req, res) => {
  // Save User to Database
  User.create({
    name: req.body.name,
    last_name: req.body.lastname,
    identificacion: req.body.identificacion,
    phone_number: req.body.phonenumber,
    roleId: req.body.role,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 6)
  })
    .then(user => {
     res.send({ message: "User was registered successfully!" });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
