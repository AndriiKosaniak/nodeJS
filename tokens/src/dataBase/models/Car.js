const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');
const {
    config: {
        USER_TABLE, USER_MODEL, KEY_ID, FOREIGN_USER_ID
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
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        reference: {
            model: USER_TABLE,
            as: USER_MODEL,
            key: KEY_ID
        }
    }
}, { sequelize });

const User = require('./User');

Car.belongsTo(User, { foreignKey: FOREIGN_USER_ID });

module.exports = Car;
