const cron = require('node-cron');
const { CRON_SCHEDULE } = require('../configs/constants');
const { authService: { deleteExpiredRefreshToken } } = require('../services');

module.exports = () => {
    cron.schedule(CRON_SCHEDULE, async () => {
        await deleteExpiredRefreshToken();
    });
};
