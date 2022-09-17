module.exports = (sequelize, DataTypes) => {
    return sequelize.define("films", {
        title: DataTypes.STRING,
    });
};
