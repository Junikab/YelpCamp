const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/relationshipDB")
    .then(() => {
        console.log("Mongo connection open!");
    })
    .catch((err) => {
        console.log("Connection Fail!");
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ["Spring", "Summer", "Fall", "Winter"],
    },
});

const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//     { name: "Apple", price: "3", season: "Winter" },
//     { name: "Grapes", price: "5", season: "Summer" },
//     { name: "Mango", price: "1", season: "Spring" },
// ]);

// const mkFarm = async () => {
//     const farm = new Farm({
//         name: "Fully belly",
//         city: "Guinda, CA",
//     });
//     const grapes = await Product.findOne({ name: "Grapes" });
//     farm.products.push(grapes);
//     console.log(farm);
//     await farm.save()
// };

// mkFarm()

const addProduct = async () => {
    const farm = await Farm.findOne({ name: "Fully belly" });
    const mango = await Product.findOne({ name: "Mango" });
    farm.products.push(mango);
    await farm.save();
    console.log(farm);
};

Farm.findOne({ name: "Fully belly" })
    .populate("products")
    .then((farm) => console.log(farm));
