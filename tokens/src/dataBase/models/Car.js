const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');

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
            model: 'Users',
            as: 'User',
            key: 'id'
        }
    }
}, { sequelize });

const User = require('./User');

Car.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Car;
