const { Car, Document } = require('../../dataBase/models');

module.exports = {
    createCar: (car) => Car.create(car),

    getAllCars: () => Car.findAll(),

    getCarById: (id) => Car.findOne({
        where: id
    }),

    updateCar: (id, newData) => Car.update(
        { ...newData },
        { where: id }
    ),

    updateCarFiles: (data, car_id) => Document.update(
        data,
        {
            where: { car_id },
            returning: true,
            plain: true
        }
    ),

    deleteCar: (id) => Car.destroy({
        where: id
    })
};
