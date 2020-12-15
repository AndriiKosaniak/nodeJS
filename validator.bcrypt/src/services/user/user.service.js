const UserModel = require('../../dataBase/models/User');

module.exports = {


    getUsers: () => UserModel.findAll(),

    getUserByParams: (params) => UserModel.findAll({
        where: {
            username: params
        }
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
