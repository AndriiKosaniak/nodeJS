const Joi = require('joi');
const { regExp: { EMAIL, PASSWORD } } = require('../configs');

module.exports = Joi.object({
    username: Joi.string().alphanum().min(2).max(15),
    password: Joi.string().regex(PASSWORD),
    email: Joi.string().regex(EMAIL)
});
