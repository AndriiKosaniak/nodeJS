const Joi = require('joi');

module.exports = Joi.object({
    model: Joi.string().alphanum().min(1).max(50),
    user_id: Joi.number().integer()
});
