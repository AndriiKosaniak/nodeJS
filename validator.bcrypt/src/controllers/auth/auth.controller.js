const { authService } = require('../../services');
const { responseCodes } = require('../../configs');
const { passwordHelper: { hash } } = require('../../helpers');

const authController = {

    registerUser: async (req, res, next) => {
        try {
            const password = await hash(req.body.password);

            Object.assign(req.body, { password });
            const user = await authService.createUser(req.body);

            res.json(user);
        } catch (e) {
            next(e);
        }
    },

    loginUser: async (req, res, next) => {
        try {
            await res.status(responseCodes.OK).json(req.user);
        } catch (e) {
            next(e);
        }
    }
};

module.exports = authController;
