const { Sequelize } = require('sequelize');
const {
    config: {
        DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_DIALECT
    }
} = require('../configs');

module.exports.sequelize = new Sequelize(DB_NAME,
    DB_USERNAME,
    DB_PASSWORD, {
        host: DB_HOST,
        dialect: DB_DIALECT
    });
