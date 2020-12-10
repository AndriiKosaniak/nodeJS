const {userService} = require('../../services');
const { responseCodes } = require('../../configs');


const registrationController = {

    registerUser: async (req, res, next) => {
        try {
           const user = await userService.createUser(req.body);

            res.json(user);
        }
        catch (e) {
            next(e);
        }

    },
};

module.exports = registrationController;
