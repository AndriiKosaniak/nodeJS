const { userService } = require('../../services');
const { responseCodes: { OK, NOT_CONTENT } } = require('../../configs');

const userController = {
    getUsers: async (req, res, next) => {
        try {
            const users = await userService.getUsers();

            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res, next) => {
        try {
            const { id } = req.params;

            const user = await userService.getUserById(id);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    updateUser: async (req, res, next) => {
        try {
            const { id } = req.params;
            const newData = req.body;

            await userService.updateUser(id, newData);

            res.status(OK).json('Updated successfully');
        } catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { id } = req.params;

            await userService.deleteUser(id);

            res.status(NOT_CONTENT);
        } catch (e) {
            next(e);
        }
    }
};

module.exports = userController;
