module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define("menus", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      logo: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.INTEGER
      }
    });

    return Menu;
  };
