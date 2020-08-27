module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      identificacion: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    });

    return User;
  };
