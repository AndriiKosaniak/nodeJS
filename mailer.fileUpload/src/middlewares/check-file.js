const { ErrorHandler, errors } = require('../errors');

module.exports = (req, res, next) => {
    try {
        const { files } = req;

        const docs = [];
        const photos = [];

        const allFiles = Object.values(files);

        for (let i = 0; i < allFiles.length; i++) {
            const { mimetype, size } = allFiles[i]


        }
    } catch (e) {
        next(e);
    }
}