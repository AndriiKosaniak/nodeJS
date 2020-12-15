const User = require('../../dataBase/models/User');

module.exports = {
    createUser: (user) => User.create(user),
};
