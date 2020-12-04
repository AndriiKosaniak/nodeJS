const {Sequelize} = require('sequelize');

module.exports.sequelize = new Sequelize('dbname',
  'root',
  'root', {
    host: 'localhost',
    dialect: 'mysql'
  });
