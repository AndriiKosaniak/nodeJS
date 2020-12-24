const {
    config: {
        USER_TABLE, USER_MODEL, KEY_ID, CAR_TABLE, OAUTH_TABLE
    }
} = require('../../configs');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(USER_TABLE, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            avatar: {
                type: Sequelize.DataTypes.STRING
            }
        });

        await queryInterface.createTable(CAR_TABLE, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            model: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            user_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                foreignKey: true,
                reference: {
                    model: USER_TABLE,
                    as: USER_MODEL,
                    key: KEY_ID
                }
            }
        });

        await queryInterface.createTable(OAUTH_TABLE, {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            access_token: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
            },
            refresh_token: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            user_id: {
                type: Sequelize.DataTypes.INTEGER,
                foreignKey: true,
                reference: {
                    model: USER_TABLE,
                    as: USER_MODEL,
                    key: KEY_ID
                }
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable(USER_TABLE);
        await queryInterface.dropTable(CAR_TABLE);
        await queryInterface.dropTable(OAUTH_TABLE);
    }
};
