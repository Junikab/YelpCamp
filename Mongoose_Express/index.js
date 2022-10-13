const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/product");
const Farm = require("./models/farm");

const { findById, populate } = require("./models/product");
const methodOverride = require("method-override");

const AppError = require("./AppError");

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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

const categories = ["fruit", "vegetable", "dairy"];

// Farm Routs*******************************************

app.get("/farms", async (req, res) => {
    const farms = await Farm.find({});
    res.render("farms/index", { farms });
});

app.get("/farms/new", (req, res) => {
    res.render("farms/new");
});

app.get("/farms/:id", async (req, res, next) => {
    const { id } = req.params;
    const farm = await Farm.findById(id).populate("products");
    // if (!farm) {
    //     throw next(new AppError(404, "No farm found!"));
    // }
    res.render("farms/show", { farm });
});

app.delete("/farms/:id", async (req, res) => {
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect("/farms");
});

app.post("/farms", async (req, res) => {
    const newFarm = new Farm(req.body);
    await newFarm.save();
    res.redirect("/farms");
});

app.get("/farms/:id/products/new", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    res.render("products/new", { categories, farm });
});

app.post("/farms/:id/products", async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
});

// Product Routs****************************************
app.get(
    "/products",
    wrapAsync(async (req, res) => {
        const { category } = req.query;
        if (category) {
            const products = await Product.find({ category });
            res.render("products/index", { products, category });
        } else {
            const products = await Product.find(req.body);
            res.render("products/index", { products, category: "All" });
        }
    })
);

app.get("/products/new", (req, res) => {
    res.render("products/new", { categories });
});

// app.get("/error", (req,res)=>{
//     pop.fly()
//     // throw new AppError(500, 'ERRRORRRRRRRRRRRRRRRRRRRRR')
// })

app.post(
    "/products",
    wrapAsync(async (req, res, next) => {
        const newProduct = await new Product(req.body);
        await newProduct.save();
        res.redirect("/products");
    })
);

function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((e) => next(e));
    };
}

app.get(
    "/products/:id",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findById(id).populate("farm");
        if (!product) {
            throw next(new AppError(404, "No product found!"));
        }
        res.render("products/show", { product });
    })
);

app.get(
    "/products/:id/edit",
    wrapAsync(async (req, res, next) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw next(new AppError(404, "No product found!"));
        }
        res.render("products/edit", { product, categories });
    })
);

app.put(
    "/products/:id",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {
            runValidators: true,
        });
        res.redirect(`/products/${product._id}`);
    })
);

app.get(
    "/products",
    wrapAsync(async (req, res) => {
        const products = await Product.find({});
        res.render("products/index.ejs", { products });
    })
);

app.delete(
    "/products/:id",
    wrapAsync(async (req, res) => {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        res.redirect("/products");
    })
);

app.use((err, req, res, next) => {
    const { status = 500 } = err;
    const { message = "Something went wrong!" } = err;
    res.status(status).send(message);
    next(err);
});

app.listen("3000", () => {
    console.log("App is listening to port 3000!");
});
