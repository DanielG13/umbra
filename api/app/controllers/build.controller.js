const db = require("../models");
const config = require("../config/auth.config");
const Torre = db.torre;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.index = async (req, res) => {
  const Torres = await Torre.findAll();
  if (!Torres) {
    return res.status(404).send({ torres: [] });
  }
        //ENVIO DE RESPUESTAS OK
        res.status(200).send({
          torres: Torres,
        });

};

exports.create = (req, res) => {
  // Save User to Database
  Torre.create({
    description: req.body.description,
  })
    .then(torre => {
     res.send({ message: "Build was registered successfully!" });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
