const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.torre = require("./torre.model.js")(sequelize, Sequelize);
db.piso = require("./piso.model.js")(sequelize, Sequelize);
db.apartamento = require("./apartamento.model.js")(sequelize, Sequelize);
db.menu = require("./menu.model.js")(sequelize, Sequelize);
db.sub_menu = require("./sub_menu.model.js")(sequelize, Sequelize);

db.role.hasMany(db.user, {})
db.user.belongsTo(db.role, {})

db.torre.hasMany(db.piso, {})
db.piso.belongsTo(db.torre, {})

db.piso.hasMany(db.apartamento, {})
db.apartamento.belongsTo(db.piso, {})

db.menu.hasMany(db.sub_menu, { as: 'SubMenu' })
db.sub_menu.belongsTo(db.menu, {})

db.menu.belongsToMany(db.role, {
  through: "rol_menus",
  foreignKey: "menu_id",
  otherKey: "rol_id"
});
db.role.belongsToMany(db.menu, {
  through: "rol_menus",
  foreignKey: "rol_id",
  otherKey: "menu_id"
});

module.exports = db;
