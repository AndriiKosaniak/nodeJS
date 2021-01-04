const { shopService } = require('../../services');
const { responseCodes: { OK, NOT_CONTENT } } = require('../../configs');

module.exports = {
    createItem: async (req, res, next) => {
        try {
            const item = req.body;

            const newItem = await shopService.addItem(item);

            res.json(newItem);
        } catch (e) {
            next(e);
        }
    },
    deleteItem: async (req, res, next) => {
        try {
            const { id } = req.params;

            await shopService.deleteItem(id);

            res.status(NOT_CONTENT);
        } catch (e) {
            next(e);
        }
    },
    getItems: async (req, res, next) => {
        try {
            const items = await shopService.findItems();

            res.json(items);
        } catch (e) {
            next(e);
        }
    },
    getItem: async (req, res, next) => {
        try {
            const { params } = req.params;

            const item = await shopService.findItemByParams(params);

            res.json(item);
        } catch (e) {
            next(e);
        }
    },
    updateItem: async (req, res, next) => {
        try {
            const { params: { id }, body: { data } } = req;

            await shopService.updateItem(id, data);

            res.status(OK);
        } catch (e) {
            next(e);
        }
    }
};
