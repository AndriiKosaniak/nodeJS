const { carService } = require('../../services');
const { responseCodes: { NOT_CONTENT, OK } } = require('../../configs');

const carsController = {
    getCars: async (req, res, next) => {
        try {
            const cars = await carService.getAllCars();

            res.json(cars);
        } catch (e) {
            next(e);
        }
    },

    getCar: async (req, res, next) => {
        try {
            const { id } = req.params;

            const car = await carService.getCarById(id);

            res.json(car);
        } catch (e) {
            next(e);
        }
    },

    updateCar: async (req, res, next) => {
        try {
            const { id } = req.params;
            const newData = req.body;

            await carService.updateCar(id, newData);

            res.status(OK).json('Updated successfully');
        } catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const { id } = req.params;

            await carService.deleteCar(id);

            res.status(NOT_CONTENT);
        } catch (e) {
            next(e);
        }
    }
};

module.exports = carsController;
