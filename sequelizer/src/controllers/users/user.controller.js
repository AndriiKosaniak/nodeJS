const {userService} = require('../../services')

const userController = {
    getUsers: async (req, res) => {
        try {
            const users = await userService.getUsers()

            res.status(200).json(users)
        }
        catch (error) {
            res.status(400).json(error.message);
        }
    },

    getUserByEmail: async (req, res) => {
        try {
            const {email} = req.params;

            const user = await userService.getUserByEmail(email)

            res.status(400).json(user)
        }
        catch (error) {
            res.status(400).json(error.message)
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = req.body;
            const newData = req.query;

            await userService.updateUser(user, newData);

            res.status(200).json('The user has been updated');
        }
        catch (error) {
            res.status(400).json(error.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = req.body;

            await userService.deleteUser(user)

            res.status(200).json('The user has been deleted');
        }
        catch (error) {
            res.status(400).json(error.message);
        }
    }
};

module.exports = userController;
