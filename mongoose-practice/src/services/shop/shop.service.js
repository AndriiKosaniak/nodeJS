const Shop = require('../../dataBase/mongo-model/Shop');

module.exports = {
    addItem: (item) => new Shop(item).save(),

    deleteItem: (id) => Shop.findByIdAndDelete(id),

    findItemByParams: (params) => Shop.findOne(params),

    findItems: () => Shop.find({}),

    updateItem: (id, data) => Shop.findByIdAndUpdate(id, data)
};
