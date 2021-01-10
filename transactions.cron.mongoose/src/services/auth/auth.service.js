const { Op } = require('sequelize');
const User = require('../../dataBase/models/User');
const OAuth = require('../../dataBase/models/OAuth');
const { MONTH } = require('../../configs/constants');

module.exports = {
    createUser: (user, transaction) => User.create(user, { transaction }),

    deleteExpiredRefreshToken: () => OAuth.destroy({
        where: {
            createdAt: {
                [Op.gt]: new Date(new Date() - MONTH)
            }
        }
    })
};
