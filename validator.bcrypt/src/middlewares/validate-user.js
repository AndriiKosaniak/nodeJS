const {authValidator} = require('./../validators');
const {ErrorHandler} = require('./../errors');
const {responseCodes: {BAD_REQUEST}} = require('./../configs')

module.exports = (req, res, next) => {
    try {
        const {error} = authValidator.validate(req.body)

        if(error){
            throw new ErrorHandler(error.details[0].message, BAD_REQUEST)
        }
    } catch (e) {
        next(e)
    }
}
