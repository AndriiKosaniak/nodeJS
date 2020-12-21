const bcrypt = require('bcrypt');
const { errors: { WRONG_USERNAME_OR_PASS }, ErrorHandler } = require('../errors');
const { config: { HASH_SALT } } = require('../configs');

module.exports = {
    hash: (password) => bcrypt.hash(password, HASH_SALT),
    compare: async (password, hash) => {
        const doesPasswordMatch = await bcrypt.compare(password, hash);

        if (!doesPasswordMatch) {
            throw new ErrorHandler(WRONG_USERNAME_OR_PASS.message, WRONG_USERNAME_OR_PASS.code);
        }
    }
};
