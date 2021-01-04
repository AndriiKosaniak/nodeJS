const { ErrorHandler, errors: { TOO_MANY_CAR_PHOTOS } } = require('../errors');

module.exports = (req, res, next) => {
    try {
        if (req.photos.length > 10) {
            throw new ErrorHandler(TOO_MANY_CAR_PHOTOS.message, TOO_MANY_CAR_PHOTOS.code);
        }

        next();
    } catch (e) {
        next(e);
    }
};
