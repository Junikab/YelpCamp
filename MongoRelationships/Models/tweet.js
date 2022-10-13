const mongoose = require("mongoose");
const {Schema} = mongoose


mongoose
    .connect("mongodb://localhost:27017/relationshipDB")
    .then(() => {
        console.log("Mongo connection open!");
    })
    .catch((err) => {
        console.log("Connection Fail!");
        console.log(err);
    });

const userSchema = new Schema({
    username: String,
    age: Number,
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" }
});


const User = mongoose.model("User", userSchema)
const Tweet = mongoose.model("Tweet", tweetSchema);


// const mkTweet = async ()=>{
//     // const user = await new User ({username: "Junikab", age: "34"})
//     const user = await User.findOne({ username: "Junikab" });
//     const tweet2 = await new Tweet({ text: "Great success!!!", likes: "100" });
//     tweet2.user= user;
    
//     tweet2.save()
// }

// mkTweet()

const findTweet = async ()=>{
    const t = await Tweet.find({})
    .populate("user")
    console.log(t)
}

findTweet()