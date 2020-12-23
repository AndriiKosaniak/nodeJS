const { Sequelize } = require('sequelize');

module.exports.sequelize = new Sequelize('users_cars',
    'root',
    '123hello', {
        host: 'localhost',
        dialect: 'mysql'
    });
