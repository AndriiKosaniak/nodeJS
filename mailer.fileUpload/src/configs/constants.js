const path = require('path');

module.exports = {
    AUTHORIZATION: 'Authorization',
    WELCOME_EMAIL_SUBJECT: 'Welcome on board',
    DELETE_EMAIL_SUBJECT: 'Account deleted',
    WELCOME_TEMPLATE: 'welcome',
    DELETE_TEMPLATE: 'delete',
    TEMPLATES_PATH: path.join(process.cwd(), 'email-templates'),
    PUBLIC_PATH: path.join(process.cwd(), 'public'),
    PHOTO_MAX_SIZE: 10 * 1024 * 1024,
    DOC_MAX_SIZE: 20 * 1024 * 1024,
    PHOTOS_MIMETYPES: [
        'image/gif',
        'image/jpeg',
        'image/pjpeg',
        'image/png',
        'image/tiff',
        'image/webp',
    ],
    DOCS_MIMETYPES: [
        'application/msword',
        'application/txt',
        'application/pdf',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]

};
