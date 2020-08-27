const db = require("../models");
const config = require("../config/auth.config");
const Piso = db.piso;
const Torre = db.torre;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.index = async (req, res) => {
  const Pisos = await Piso.findAll();
  if (!Pisos) {
    return res.status(404).send({ pisos: [] });
  }

  let Pisol = []
  for await (const item of Pisos) {
    let torre = await Torre.findAll({
        where: {
          id: item.torreId
        }
      });
    Pisol.push({piso: item, torre: torre[0] });
  }
        //ENVIO DE RESPUESTAS OK
        res.status(200).send({
          pisos: Pisol,
        });

};

exports.create = (req, res) => {
  // Save User to Database
  Piso.create({
    description: req.body.description,
    torreId: req.body.torre,
  })
    .then(piso => {
     res.send({ message: "Level was registered successfully!" });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};
