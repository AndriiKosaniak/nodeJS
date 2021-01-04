const { BAD_REQUEST, FORBIDDEN, NOT_CONTENT, UNAUTHORIZED, NOT_FOUND } = require('../configs/response-codes');

module.exports = {
    NOT_VALID_EMAIL: {
        message: 'This email is already taken',
        code: BAD_REQUEST
    },

    NOT_VALID_ID: {
        message: 'This ID is incorrect',
        code: BAD_REQUEST
    },

    NOT_VALID_BODY: {
        message: 'Invalid request, please double-check your data',
        code: FORBIDDEN
    },

    NOT_CONTENT: {
        message: 'User deleted successfully',
        code: NOT_CONTENT
    },

    WRONG_USERNAME_OR_PASS: {
        message: 'Username or password is not valid',
        code: BAD_REQUEST
    },

    NOT_VALID_TOKEN: {
        message: 'Not valid token',
        code: UNAUTHORIZED
    },
    PERMISSION_DENIED: {
        message: 'Permission denied',
        code: FORBIDDEN
    },
    WRONG_TEMPLATE: {
        message: 'Template is not found',
        code: NOT_FOUND
    },
    TOO_BIG_FILE: {
        message: 'The uploaded file is too big',
        code: BAD_REQUEST
    },
    WRONG_FILE_EXTENSION: {
        message: 'Wrong file extension',
        code: BAD_REQUEST
    },
    JUST_ONE_PHOTO: {
        message: 'Avatar should be only one photo',
        code: BAD_REQUEST
    },
    TOO_MANY_CAR_PHOTOS: {
        message: 'There should be not more than 10 photos',
        code: BAD_REQUEST
    },
    TOO_MANY_CAR_DOCS: {
        message: 'There should be not more than 10 docs',
        code: BAD_REQUEST
    }
};
