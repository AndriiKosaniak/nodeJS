const {
    emailActions, constants: {
        WELCOME_EMAIL_SUBJECT, WELCOME_TEMPLATE, DELETE_EMAIL_SUBJECT, DELETE_TEMPLATE
    }
} = require('../configs');

module.exports = {
    [emailActions.WELCOME]: {
        subject: WELCOME_EMAIL_SUBJECT,
        templateName: WELCOME_TEMPLATE
    },
    [emailActions.DELETE]: {
        subject: DELETE_EMAIL_SUBJECT,
        templateName: DELETE_TEMPLATE
    }
};
