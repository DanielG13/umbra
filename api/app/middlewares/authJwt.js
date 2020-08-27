const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdministrador = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    Role.findAll({
        where: {
          id: user.id
        }
      }).then(roles => {
        //console.log(roles[0].name);
        if (roles[0].name === "Administrador") {
          next();
          return;
        }

      res.status(403).send({
        message: "Require Administrador Role!"
      });
      return;
    });
  });
};

isDigitador = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    Role.findAll({
        where: {
          id: user.id
        }
      }).then(roles => {
        if (roles[0].name === "Digitador") {
          next();
          return;
        }

      res.status(403).send({
        message: "Require Digitador Role!"
      });
    });
  });
};

isDigitadorOrAdministrador = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    Role.findAll({
        where: {
          id: user.id
        }
      }).then(roles => {
        if (roles[0].name === "Digitador") {
          next();
          return;
        }

        if (roles[0].name === "Administrador") {
          next();
          return;
        }

      res.status(403).send({
        message: "Require Digitador or Administrador Role!"
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdministrador: isAdministrador,
  isDigitador: isDigitador,
  isDigitadorOrAdministrador: isDigitadorOrAdministrador
};
module.exports = authJwt;
