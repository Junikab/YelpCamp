const mongoose = require("mongoose");
mongoose
    .connect("mongodb://localhost:27017/shopApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connection open!");
    })
    .catch((err) => {
        console.log("Connection Fail!");
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        enum: ["s", "m", "l"],
        lowercase: true,
    },
    sugar: {
        type: Number,
        default: 0,
    },
    milk: {
        type: [String],
        default: "Regular milk",
    },
});

productSchema.methods.orderComplete = function () {
    console.log("Order Complete!");
    console.log(`-You have ordered ${this.name} with ${this.milk}.`);
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: "Mocha" });
    foundProduct.orderComplete();
};

findProduct()

// const coffee = new Product({ name: "Mocha", price: 5, size: "L" });
// coffee
//     .save()
//     .then((data) => {
//         console.log("IT worked!");
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log("ERROR!");
//         console.log(err);
//     });
