const { User } = require('../../dataBase/models');

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

    updateUser: (id, newData, transaction) => User.update(
        { ...newData },
        {
            where: { id },
            returning: true,
            plain: true,
            transaction
        }
    ),

    deleteUser: (id, transaction) => User.destroy({
        where: id,
        transaction
    })
};
