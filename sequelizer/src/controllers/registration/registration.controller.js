const {registrationService} = require('../../services/registration/registration.service');

const registrationController = {

    registerUser: async (req, res) => {
        try {
           const user = await registrationService.setUser(req.body);

            res.json(user)
        }
        catch (error) {
            res.json(error.message);
        }

    },
};

module.exports = registrationController;
