module.exports = (sequelize, Sequelize) => {
    const Torre = sequelize.define("torres", {
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

    return Torre;
  };
