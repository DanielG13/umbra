const db = require("../models");
const config = require("../config/auth.config");
const Role = db.role;
const User = db.user;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.index = async (req, res) => {
  const Roles = await Role.findAll();
  if (!Roles) {
    return res.status(404).send({ roles: [] });
  }

        //ENVIO DE RESPUESTAS OK
        res.status(200).send({
          roles: Roles,
        });

};

exports.create = (req, res) => {
  // Save User to Database

};
