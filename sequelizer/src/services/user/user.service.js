const db = require('../../dataBase').getInstance();


module.exports = {

    createUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.create(user)
    },

    getUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll();
    },

    getUserByEmail: (email) => {
        const UserModel = db.getModel('User');

         return UserModel.findAll({
            where: {
                email
            }
        });

    },

    updateUser: (user, newData) => {
        const UserModel = db.getModel('User');

        return UserModel.update({
        ...newData},
            {
        where: {
            ...user
        }});
    },

    deleteUser: (user) => {
        const UserModel = db.getModel('User');

        return UserModel.destroy({
            where: {
                ...user
            }
        });
    }

}
