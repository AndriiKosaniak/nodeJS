const { Car } = require('../../dataBase/models');

module.exports = {
    getAllCars: () => Car.findAll(),

    getCarById: (id) => Car.findOne({
        where: id
    }),

    updateCar: (id, newData) => Car.update(
        { ...newData },
        { where: id }
    ),

    deleteCar: (id) => Car.destroy({
        where: id
    })
};
