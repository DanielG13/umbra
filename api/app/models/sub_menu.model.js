module.exports = (sequelize, Sequelize) => {
    const SubMenu = sequelize.define("sub_menus", {
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

    return SubMenu;
  };
