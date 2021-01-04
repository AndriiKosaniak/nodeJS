const { Car, Document } = require('../../dataBase/models');

module.exports = {
    createCar: (car, transaction) => Car.create(car, { transaction }),

    getAllCars: () => Car.findAll(),

    getCarById: (id) => Car.findOne({
        where: id
    }),

    updateCar: (id, newData, transaction) => Car.update(
        { ...newData },
        {
            where: id,
            transaction
        }
    ),

    updateCarFiles: (data, car_id, transaction) => Document.update(
        data,
        {
            where: { car_id },
            returning: true,
            plain: true,
            transaction
        }
    ),

    deleteCar: (id, transaction) => Car.destroy({
        where: id,
        transaction
    })
};
