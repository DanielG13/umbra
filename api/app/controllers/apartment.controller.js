const db = require("../models");
const config = require("../config/auth.config");
const Apt = db.apartamento;
const Piso = db.piso;
const Torre = db.torre;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.index = async (req, res) => {
  const Apts = await Apt.findAll();
  if (!Apts) {
    return res.status(404).send({ apartment: [] });
  }

  let Apts_ = []
  for await (const item of Apts) {
    let pisos = await Piso.findAll({
        where: {
          id: item.pisoId
        }
      });
      for await (const i of pisos) {
        let torres = await Torre.findAll({
            where: {
              id: i.torreId
            }
          });
        Apts_ .push({apt: item, piso: i, torre: torres });
      }
  }
        //ENVIO DE RESPUESTAS OK
        res.status(200).send({
          apartamento: Apts_,
        });

};

exports.create = (req, res) => {
  // Save User to Database
  Apt.create({
    name: req.body.name,
    tipo: req.body.type,
    area_const: req.body.built_area,
    area_balcon: req.body.balcony_area,
    area_const_balcon: req.body.balcony_construction_area,
    area_priv: req.body.private_area,
    pisoId: req.body.level
  })
    .then(torre => {
     res.send({ message: "Apartment was registered successfully!" });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.gestion = (req, res) => {
  // Save User to Database
  Apt.update({ state: req.body.state }, {
  where: {
    id: req.body.id
  }
})
    .then(user => {
     res.send({ message: "Apartment was updated successfully!" });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.delete = (req, res) => {
  // Save User to Database
  Apt.destroy({
  where: {
    id: req.body.id
  }
})
    .then(user => {
     res.send({ message: "Apartment was deleted successfully!" });

    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

};

exports.count = async (req, res) => {
  // Save User to Database
  const Apts = await Apt.findAll()
  if (!Apts) {
    return res.status(404).send({ apt: [], aptD: [], aptR: [] });
  }
  let apt = 0
  let aptD = 0
  let aptR = 0
  Apts.forEach((item, i) => {
    apt++
    if (item.state == 1) {
      aptD++
    }
    if (item.state == 0) {
      aptR++
    }
  });

  res.status(200).send({
    apt: apt,
    aptD: aptD,
    aptR: aptR,
  });


};
