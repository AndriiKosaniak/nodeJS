const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');

class OAuth extends Model {
}

OAuth.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    access_token: {
        type: DataTypes.STRING,
        allowNull: false
    },
    refresh_token: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        reference: {
            model: 'Users',
            as: 'User',
            key: 'id'
        }
    }
}, { sequelize });

module.exports = OAuth;
