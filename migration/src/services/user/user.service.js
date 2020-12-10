const UserModel = require('../../dataBase/models/User');

module.exports = {

    createUser: (user) => UserModel.create(user),

    getUsers: () => UserModel.findAll(),

    getUserByParams: (params) => UserModel.findAll({
        where: params
    }),

    getUserById: (id) => UserModel.findAll({
        where: id
    }),

    updateUser: (user, newData) => UserModel.update(
        {...newData},
        {where: {...user}}
    ),

    deleteUser: (user) => UserModel.destroy({
        where: {...user}
    })
};
