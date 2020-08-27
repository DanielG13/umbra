const db = require("../models");
const config = require("../config/auth.config");
const Torre = db.torre;
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.index = async (req, res) => {
  const Torres = await Torre.findAll();
  if (!Torres) {
    return res.status(404).send({ Torre: [] });
  }

  let Torre = []
  for await (const item of Torres) {
    Torre.push({Torre: item, users: await User.findAll({
        where: {
          torreId: item.id
        }
      })});
  }
        //ENVIO DE RESPUESTAS OK
        res.status(200).send({
          Torre: Torre,
        });

};

exports.create = (req, res) => {
  // Save User to Database
  Torre.create({
    name: req.body.name,
    nit: req.body.nit,
    description: req.body.description,
    state: 1
  })
    .then(Torre => {
      res.send({ message: "Torre was registered successfully!" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
