const Joi = require('joi');

module.exports = Joi.object({
    model: Joi.string()
        .alphanum()
        .min(1)
        .max(50)
        .required(),
    user_id: Joi.number().integer()
});
