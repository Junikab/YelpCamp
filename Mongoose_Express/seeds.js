const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
    .connect("mongodb://localhost:27017/farmStand", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Mongo connection open!");
    })
    .catch((err) => {
        console.log("Connection Fail!");
        console.log(err);
    });



    // const p = new Product({
    //     name: "potato",
    //     price: 3,
    //     category: "vegetable"
    // })
    // p.save().then(p=>{
    //     console.log("Product saved!");
    // }) 
    // .catch(e =>{
    //     console.log("OH NO! ERROR")
    //     console.log(e)
    // })

    const seedProducts = [
        {
            name: "apple",
            price: 2,
            category: "fruit",
        },
        {
            name: "orange",
            price: 3,
            category: "fruit",
        },
        {
            name: "grape",
            price: 5,
            category: "fruit",
        },
        {
            name: "carrot",
            price: 1,
            category: "vegetable",
        },
        {
            name: "tomato",
            price: 6,
            category: "vegetable",
        },
    ];

    Product.insertMany(seedProducts,)
    .then(res=>{
        console.log(res)
    })
    .catch(e=>{
        console.log (e)
    })

    // await Product.deleteMany({})