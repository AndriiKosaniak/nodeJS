const jwt = require('jsonwebtoken');
const { ErrorHandler, errors: { NOT_VALID_TOKEN, PERMISSION_DENIED } } = require('../errors');
const { config: { ACCESS_KEY } } = require('../configs');
const { oauthService } = require('../services');

module.exports = async (req, res, next) => {
    try {
        const token = req.get('Authorization');

        console.log(token);

        if (!token) {
            throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);
        }

        jwt.verify(token, ACCESS_KEY, (err) => {
            if (err) {
                throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);
            }
        });

        const userWithToken = await oauthService.getTokenWithUserByParams(token);

        console.log(userWithToken);

        if (!userWithToken) {
            throw new ErrorHandler(NOT_VALID_TOKEN.message, NOT_VALID_TOKEN.code);
        }

        if (userWithToken.id !== +req.params.id){
            throw new ErrorHandler(PERMISSION_DENIED.message, PERMISSION_DENIED.code);
        }

        req.user = userWithToken;

        next();
    } catch (e) {
        next(e);
    }
};
