const Log = require('../../dataBase/mongo-model/Logs');

module.exports = {
    createLog: (log) => new Log(log).save()
};
