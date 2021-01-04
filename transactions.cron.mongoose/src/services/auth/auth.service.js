const User = require('../../dataBase/models/User');

module.exports = {
    createUser: (user, transaction) => User.create(user, { transaction }),
};
