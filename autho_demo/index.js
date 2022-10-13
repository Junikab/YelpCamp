const express = require("express");
const app = express();
const User = require("./models/user");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const session = require("express-session");

mongoose
    .connect("mongodb://localhost:27017/autho_demo")
    .then(() => {
        console.log("Mongo connection open!");
    })
    .catch((err) => {
        console.log("Connection Fail!");
        console.log(err);
    });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        // cookie: { secure: true },
    })
);

const loginRequire = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect("/login");
    }
    next();
};

// *********************************************************************

app.get("/", (req, res) => {
    res.send("This is the home page.");
});

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const user = new User({ username, password });
    await user.save();
    req.session.user_id = user._id;
    res.redirect("/");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect("/secret");
    } else {
        res.redirect("/login");
    }
});

app.post("/logout", (req, res) => {
    req.session.user_id = null;
    res.redirect("/login");
});

app.get("/secret", loginRequire, (req, res) => {
    res.render("secret");
});

app.listen(3000, () => {
    console.log("Serving on port 3000!");
});
