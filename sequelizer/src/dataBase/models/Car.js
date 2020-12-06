const {Model, DataTypes} = require('sequelize');

const {sequelize} = require("../index");

class CarModel extends Model {
}

CarModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {sequelize})

module.exports = CarModel;
