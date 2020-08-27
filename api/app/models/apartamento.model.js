module.exports = (sequelize, Sequelize) => {
    const Apartamento = sequelize.define("apartamentos", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      area_const: {
        type: Sequelize.STRING
      },
      area_balcon: {
        type: Sequelize.STRING
      },
      area_const_balcon: {
        type: Sequelize.STRING
      },
      area_priv: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      }
    });

    return Apartamento;
  };
