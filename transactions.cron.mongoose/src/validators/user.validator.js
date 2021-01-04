const Joi = require('joi');
const { regExp: { EMAIL, PASSWORD } } = require('../configs');

module.exports = Joi.object({
    username: Joi.string().alphanum().min(2).max(15)
        .required(),
    password: Joi.string().regex(PASSWORD).required(),
    email: Joi.string().regex(EMAIL).required()
});
