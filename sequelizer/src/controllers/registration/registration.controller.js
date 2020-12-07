const {userService} = require('../../services')

const registrationController = {

    registerUser: async (req, res) => {
        try {
           const user = await userService.createUser(req.body);

            res.json(user)
        }
        catch (error) {
            res.json(error.message);
        }

    },
};

module.exports = registrationController;
