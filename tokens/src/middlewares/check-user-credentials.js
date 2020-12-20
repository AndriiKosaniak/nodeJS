const { userService } = require('../services');
const { passwordHelper: { compare } } = require('../helpers');
const { ErrorHandler } = require('../errors');
const { errors: { WRONG_USERNAME_OR_PASS } } = require('../errors');

module.exports = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const [user] = await userService.getUserByParams(username);

        if (!user) {
            throw new ErrorHandler(WRONG_USERNAME_OR_PASS.message, WRONG_USERNAME_OR_PASS.code);
        }

        await compare(password, user.password);

        req.user = user;

        next();
    } catch (e) {
        next(e);
    }
};
