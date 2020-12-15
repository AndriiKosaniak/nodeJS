const {userService} = require('./../services/');
const {ErrorHandler, errors} = require('../errors');

module.exports = async (req, res, next) => {
    try {
        const {email} = req.body;

        const [foundUser] = await userService.getUserByParams({email});

        if (foundUser) {
            return next(
                new ErrorHandler(
                    errors.NOT_VALID_EMAIL.message,
                    errors.NOT_VALID_EMAIL.code)
            );
        }

        next();
    } catch (e) {
        next(e)
    }
};
