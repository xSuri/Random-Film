module.exports = (sequelize, DataTypes) => {
    return sequelize.define("scores", {
        name: DataTypes.STRING,
        points: DataTypes.INTEGER,
    });
};