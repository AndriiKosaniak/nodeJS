const { Router } = require('express');

const { shopController } = require('../../controllers');

const shopRouter = Router();

shopRouter.post('/', shopController.createItem);
shopRouter.delete('/:id', shopController.deleteItem);
shopRouter.get('/', shopController.getItems);
shopRouter.get('/:params', shopController.getItem);
shopRouter.put('/:id', shopController.updateItem);

module.exports = shopRouter;
