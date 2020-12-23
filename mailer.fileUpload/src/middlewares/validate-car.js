const { carUpdateValidator } = require('../validators');
const { ErrorHandler } = require('../errors');
const { responseCodes: { BAD_REQUEST } } = require('../configs');

module.exports = {

    carUpdateValidator: async (req, res, next) => {
        try {
            const { error } = await carUpdateValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
            }

            next();
        } catch (e) {
            next(e);
        }
    }
};
