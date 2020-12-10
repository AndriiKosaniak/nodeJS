const {Sequelize} = require('sequelize');



module.exports.sequelize = new Sequelize('users_cars',
  'root',
  'root', {
    host: 'localhost',
    dialect: 'mysql'
  });
