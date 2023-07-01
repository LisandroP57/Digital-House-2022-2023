module.exports = (sequelize, dataTypes) => {
    let alias = 'Genre';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
        },
        ranking: {
            type: dataTypes.INTEGER(100).UNSIGNED,
        }
    };
    let config = {
        tableName: 'genres',
        createdAt: "created_at",
        updatedAt: "updated_at",
    };
    const Genre = sequelize.define(alias, cols, config)

    Genre.associate = (models) => {
        Genre.hasMany(models.Movie, {
            as: "movies",
            foreignKey: "genre_id"
        }) 
    }

    return Genre
}