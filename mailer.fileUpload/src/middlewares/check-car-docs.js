const { ErrorHandler, errors: { TOO_MANY_CAR_DOCS } } = require('../errors');

module.exports = (req, res, next) => {
    try {
        if (req.docs.length > 10) {
            throw new ErrorHandler(TOO_MANY_CAR_DOCS.message, TOO_MANY_CAR_DOCS.code);
        }

        next();
    } catch (e) {
        next(e);
    }
};
