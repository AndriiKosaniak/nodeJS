const jwt = require('jsonwebtoken');
const {
    config: {
        ACCESS_KEY, REFRESH_KEY, ACCESS_EXPIRATION, REFRESH_EXPIRATION
    }
} = require('../configs');

module.exports = () => {
    const access_token = jwt.sign({}, ACCESS_KEY, { expiresIn: ACCESS_EXPIRATION });
    const refresh_token = jwt.sign({}, REFRESH_KEY, { expiresIn: REFRESH_EXPIRATION });

    return {
        access_token,
        refresh_token
    };
};
