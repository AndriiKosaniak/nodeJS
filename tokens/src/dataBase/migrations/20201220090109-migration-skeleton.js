module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
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
            }
        });

        await queryInterface.createTable('Cars', {
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
                    model: 'Users',
                    as: 'User',
                    key: 'id'
                }
            }
        });

        await queryInterface.createTable('OAuths', {
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
                    model: 'Users',
                    as: 'User',
                    key: 'id'
                }
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Users');
        await queryInterface.dropTable('Cars');
        await queryInterface.dropTable('OAuth');
    }
};
