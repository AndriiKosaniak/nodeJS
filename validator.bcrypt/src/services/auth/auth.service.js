const UserModel = require('./../../dataBase/models/User');

module.exports = {
    createUser:  (user) =>  UserModel.create(user),
};
