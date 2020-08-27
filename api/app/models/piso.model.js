module.exports = (sequelize, Sequelize) => {
    const Piso = sequelize.define("pisos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    });

    return Piso;
  };
