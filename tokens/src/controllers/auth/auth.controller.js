const { authService } = require('../../services');
const { responseCodes } = require('../../configs');
const { tokenizer } = require('../../helpers');
const { passwordHelper: { hash } } = require('../../helpers');
const { oauthService } = require('../../services');

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
            const { id } = req.user;

            const token_pair = tokenizer();

            await oauthService.createTokenPair({ user_id: id, ...token_pair });

            await res.status(responseCodes.OK).json(req.user);
        } catch (e) {
            next(e);
        }
    }
};

module.exports = authController;
