const { authJwt, verifySignUp } = require("../middlewares");
const userController = require("../controllers/user.controller");
const roleController = require("../controllers/role.controller");
const buildController = require("../controllers/build.controller");
const levelController = require("../controllers/level.controller");
const apartmentController = require("../controllers/apartment.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/user",
    [authJwt.verifyToken, authJwt.isAdministrador],
    userController.index
  );

  app.post(
    "/api/user/create",
    [authJwt.verifyToken, authJwt.isAdministrador, verifySignUp.checkDuplicateUserNameOrEmail],
    userController.create
  )

  app.get(
    "/api/role",
    [authJwt.verifyToken, authJwt.isAdministrador],
    roleController.index
  );

  app.post(
    "/api/role/create",
    [authJwt.verifyToken, authJwt.isAdministrador],
    roleController.create
  )

  app.get(
    "/api/build",
    [authJwt.verifyToken, authJwt.isAdministrador],
    buildController.index
  );

  app.post(
    "/api/build/create",
    [authJwt.verifyToken, authJwt.isAdministrador],
    buildController.create
  )

  app.get(
    "/api/level",
    [authJwt.verifyToken, authJwt.isAdministrador],
    levelController.index
  );

  app.post(
    "/api/level/create",
    [authJwt.verifyToken, authJwt.isAdministrador],
    levelController.create
  )

  app.get(
    "/api/apartment",
    [authJwt.verifyToken, authJwt.isAdministrador],
    apartmentController.index
  );

  app.post(
    "/api/apartment/create",
    [authJwt.verifyToken, authJwt.isAdministrador],
    apartmentController.create
  )
};
