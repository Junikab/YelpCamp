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

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const mkUser = async () => {
    const u = new User({
        first: "Harry",
        last: "Potter",
    });
    u.addresses.push({
        street: "6 Rotshild st",
        city: "New York",
        state: "NY",
        country: "USA",
    });
    const res = await u.save();
    console.log(res);
};

mkUser();
