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
    for (let i = 0; i < 300; i++) {
        const rand1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20 + 10)
        const camp = new Campground({
            author: "632a9d1e35e30b8bfd3062df",
            location: `${citiesUS[rand1000].city}, ${citiesUS[rand1000].state}`,
            name: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
                type: "Point",
                coordinates: [citiesUS[rand1000].longitude,
                citiesUS[rand1000].latitude],
            },
            images: [
                {
                    url: "https://res.cloudinary.com/djgi23npu/image/upload/v1669693764/YelpCamp/h7lk1kburi2v4mhpnsmc.jpg",
                    filename: "YelpCamp/h7lk1kburi2v4mhpnsmc",
                },
                {
                    url: "https://res.cloudinary.com/djgi23npu/image/upload/v1669693763/YelpCamp/x8ttf0znmx30ddgymxa7.png",
                    filename: "YelpCamp/x8ttf0znmx30ddgymxa7",
                },
            ],
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquam earum consectetur facere. Autem, tempora natus quo doloribus sed magni doloremque consectetur quisquam! Ab nobis quae obcaecati sed maiores illo.",
            price,
        });
        await camp.save();
    }
};

seedsDB().then(() => {
    mongoose.connection.close();
});
