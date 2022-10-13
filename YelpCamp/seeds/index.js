const mongoose = require("mongoose");
const citiesUS = require("./citiesUS");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

// Connecting to the mongoDB and checking errors
mongoose
    .connect("mongodb://localhost:27017/yelp-camp", {
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

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedsDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const rand1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20 + 10)
        const camp = new Campground({
            author: "632a9b70b0dc575b7b811a22",
            location: `${citiesUS[rand1000].city}, ${citiesUS[rand1000].state}`,
            name: `${sample(descriptors)} ${sample(places)}`,
            image: "http://source.unsplash.com/collection/483251",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam earum consectetur facere. Autem, tempora natus quo doloribus sed magni doloremque consectetur quisquam! Ab nobis quae obcaecati sed maiores illo.",
            price
        });
        await camp.save();
    }
};

seedsDB().then(() => {
    mongoose.connection.close();
});
