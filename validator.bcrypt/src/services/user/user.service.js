const User = require('../../dataBase/models/User');

module.exports = {

    getUsers: () => User.findAll(),

    getUserByParams: (params) => User.findAll({
        where: {
            username: params
        }
    }),

    getUserById: (id) => User.findAll({
        where: id
    }),

    updateUser: (id, newData) => User.update(
        { ...newData },
        { where: { id } }
    ),

    deleteUser: (user) => User.destroy({
        where: { ...user }
    })
};
