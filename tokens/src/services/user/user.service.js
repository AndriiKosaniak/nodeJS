const { User } = require('../../dataBase/models');

module.exports = {

    getUsers: () => User.findAll({ limit: 10 }),

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

    deleteUser: (id) => User.destroy({
        where: id
    })
};
