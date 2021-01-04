const { Router } = require('express');

const { carsController } = require('../../controllers');
const {
    validateCar, checkFile, checkCarDocs, checkCarPhotos
} = require('../../middlewares');

const carsRouter = Router();

carsRouter.post('/', validateCar.carValidator, checkFile, checkCarDocs, checkCarPhotos, carsController.createCar);
carsRouter.get('/', carsController.getCars);
carsRouter.get('/:id', carsController.getCar);
carsRouter.put('/:id', validateCar.carUpdateValidator, carsController.updateCar);
carsRouter.delete('/:id', carsController.deleteCar);

module.exports = carsRouter;
