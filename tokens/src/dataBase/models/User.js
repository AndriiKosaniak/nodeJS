const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');

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

User.hasMany(OAuth, { foreignKey: 'user_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });


module.exports = User;
