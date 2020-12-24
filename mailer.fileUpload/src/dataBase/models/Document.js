const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');
const {
    config: {
        CAR_TABLE, CAR_MODEL, KEY_ID
    }
} = require('../../configs');

class Car extends Model {
}

Car.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    car_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        reference: {
            model: CAR_TABLE,
            as: CAR_MODEL,
            key: KEY_ID
        }
    },
    file_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    file_path: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize });

module.exports = Car;