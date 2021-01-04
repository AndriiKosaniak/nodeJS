const { Schema, model } = require('mongoose');

const ShopSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = model('shop', ShopSchema);
