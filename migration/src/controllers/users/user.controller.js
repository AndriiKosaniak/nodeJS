const {userService} = require('../../services');
const { responseCodes } = require('../../configs');


const userController = {
    getUsers: async (req, res, next) => {
        try {
            const users = await userService.getUsers();

            res.json(users);
        }
        catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            const {id} = req.params;

            const user = await userService.getUserById(id);

            res.json(user);
        }
        catch (e) {
            next(e);
        }

    },

    updateUser: async (req, res, next) => {
        try {
            const user = req.body;
            const newData = req.query;

            await userService.updateUser(user, newData);

            res.status(responseCodes.OK);
        }
        catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const user = req.body;

            await userService.deleteUser(user);

            res.status(responseCodes.NOT_CONTENT);
        }
        catch (e) {
            next(e);
        }
    }
};

module.exports = userController;
