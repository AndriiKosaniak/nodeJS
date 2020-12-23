const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');
const { config: { FOREIGN_USER_ID } } = require('../../configs');

class User extends Model {
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize });

const OAuth = require('./OAuth');

User.hasMany(OAuth, { foreignKey: FOREIGN_USER_ID, onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = User;
