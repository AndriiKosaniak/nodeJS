const { Router } = require('express');

const { carsController } = require('../../controllers');
const { validateCar } = require('../../middlewares');

const carsRouter = Router();

carsRouter.get('/', carsController.getCars);
carsRouter.get('/:id', carsController.getCar);
carsRouter.put('/:id', validateCar.carUpdateValidator, carsController.updateCar);
carsRouter.delete('/:id', carsController.deleteCar);

module.exports = carsRouter;
