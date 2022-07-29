const mongoose = require('../db/connection')

const ItemSchema = new mongoose.Schema({
    name: String,
    url: String
})

const Item = mongoose.model('Item', ItemSchema);

// export the newly created model
module.exports = Item;