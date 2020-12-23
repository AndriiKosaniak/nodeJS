const { OAuth } = require('../../dataBase/models');
const { User } = require('../../dataBase/models');

module.exports = {
    createTokenPair: (tokenPair) => {
        OAuth.create(tokenPair);
    },
    getTokenWithUserByParams: (findObject) => {
        User.findOne({
            include: [{
                model: OAuth,
                where: findObject,
            }]
        });
    },
    deleteToken: (token) => {
        OAuth.destroy({
            where: token
        });
    }
};
