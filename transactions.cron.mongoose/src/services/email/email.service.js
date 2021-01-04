const mailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const { constants: { TEMPLATES_PATH }, config: { EMAIL_USER, EMAIL_PASS, EMAIL_SERVICE } } = require('../../configs');
const templatesInfo = require('../../email-templates');
const { ErrorHandler, errors: { WRONG_TEMPLATE } } = require('../../errors');

const transporter = mailer.createTransport({
    service: EMAIL_SERVICE,
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

const emailTemplates = new EmailTemplates({
    views: {
        root: TEMPLATES_PATH
    }
});

const sendMail = async (userEmail, action, context) => {
    try {
        const templateInfo = templatesInfo[action];

        if (!templateInfo) {
            throw new ErrorHandler(WRONG_TEMPLATE.message, WRONG_TEMPLATE.code);
        }

        const html = await emailTemplates.render(templateInfo.templateName, context);

        return transporter.sendMail({
            from: 'no-reply',
            to: userEmail,
            subject: templateInfo.subject,
            html
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    sendMail
};
