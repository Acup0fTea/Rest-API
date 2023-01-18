const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    prod_name: String,
    prod_description: String,
    prod_price: Number,
    updated_at: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Product', productSchema);