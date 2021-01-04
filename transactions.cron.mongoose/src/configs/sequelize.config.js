const {
    DB_DIALECT, DB_NAME, DB_USERNAME, DB_PASSWORD, HOST
} = require('./config');

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: HOST,
        dialect: DB_DIALECT
    }
};
