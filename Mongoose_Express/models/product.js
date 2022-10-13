const mongoose = require("mongoose");
const {Schema} = mongoose

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // inStock: {
    //     type: Boolean,
    //     require: true,
    // },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        lowerCase: true,
        enum: ["fruit", "vegetable", "dairy"],
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: "Farm"
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
