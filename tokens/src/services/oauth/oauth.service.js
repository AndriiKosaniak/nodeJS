const { OAuth } = require('../../dataBase/models');
const { User } = require('../../dataBase/models');

module.exports = {
    createTokenPair: (tokenPair) => {
        OAuth.create(tokenPair);
    },
    getTokenWithUserByParams: (findObject) => {
        OAuth.findOne({
            where: findObject,
            include: [{
                model: User
            }]
        });
}
};
