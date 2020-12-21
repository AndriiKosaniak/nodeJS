const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../index');
const {
    config: {
        USER_TABLE, USER_MODEL, KEY_ID, FOREIGN_USER_ID
    }
} = require('../../configs');

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
            model: USER_TABLE,
            as: USER_MODEL,
            key: KEY_ID
        }
    }
}, { sequelize });

const User = require('./User');

OAuth.belongsTo(User, { foreignKey: FOREIGN_USER_ID });

module.exports = OAuth;
