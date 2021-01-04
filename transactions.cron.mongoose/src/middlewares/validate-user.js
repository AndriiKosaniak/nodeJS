const { userValidator, updateValidator } = require('../validators');
const { ErrorHandler } = require('../errors');
const { responseCodes: { BAD_REQUEST } } = require('../configs');

module.exports = {
    registrationValidator: async (req, res, next) => {
        try {
            const { error } = await userValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    userUpdateValidator: async (req, res, next) => {
        try {
            const { error } = await updateValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
