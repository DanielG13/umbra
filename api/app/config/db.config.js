module.exports = {
    HOST: "localhost",
    PORT: "3307",
    USER: "root",
    PASSWORD: "danielguerrero13",
    DB: "umbra",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
