const {Sequelize, DataTypes} = require('sequelize');
const fs = require('fs');
const path = require('path');

const dbPath = path.join(process.cwd(), 'dataBase', 'models');

module.exports = (() => {
    let instance;

    const initConnection = () => {
        const client = new Sequelize('users_cars', 'root', '123hello', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        const getModels = () => {
            fs.readdir(dbPath, (err, files) => {
                files.forEach(file => {
                    const [model] = file.split('.');
                    models[model] = (require(path.join(dbPath, model)))(client, DataTypes);
                });
            });
        };

        return {
            initializeModels: () => getModels(),
            getModel: (modelName) => models[modelName]
        }
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }

            return instance;
        }
    };
})();




// module.exports.sequelize = new Sequelize('users_cars',
//   'root',
//   '123hello', {
//     host: 'localhost',
//     dialect: 'mysql'
//   });
