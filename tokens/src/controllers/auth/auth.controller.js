const { authService } = require('../../services');
const { responseCodes: { OK, NOT_CONTENT } } = require('../../configs');
const { tokenizer } = require('../../helpers');
const { passwordHelper: { hash } } = require('../../helpers');
const { oauthService } = require('../../services');
const { constants: { AUTHORIZATION } } = require('../../configs');

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

            await res.status(OK).json(req.user);
        } catch (e) {
            next(e);
        }
    },

    logoutUser: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            await oauthService.deleteToken(token);

            res.json(NOT_CONTENT);
        } catch (e) {
            next(e);
        }
    },

    refreshToken: async (req, res, next) => {
        try {
            const token = req.get(AUTHORIZATION);

            await oauthService.deleteToken(token);

            const token_pair = tokenizer();
            await oauthService.createTokenPair({ user_id: req.user.id, ...token_pair });
        } catch (e) {
            next(e);
        }
    }
};

module.exports = authController;
