module.exports = (sequelize, dataTypes) => {

    let alias = "Actor";

    let cols = {
          id: {
                type: dataTypes.INTEGER(10).UNSIGNED,
                primaryKey: true,
                autoIncrement: true,
          },
          first_name: {
                type: dataTypes.STRING(100),
                allowNull: true,
          },
          last_name: {
                type: dataTypes.STRING(100),
                allowNull: true,
          },
          rating: {
                type: dataTypes.DECIMAL(3.1).UNSIGNED,
          },
    };
    let config = {
          tableName: "actors",
          createdAt: "created_at",
          updatedAt: "updated_at",
    };

    const Actor = sequelize.define(alias, cols, config);

    return Actor;
};