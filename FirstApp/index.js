const express = require("express");
const app = express();

// app.use((req,res)=>{
//     console.log('We got a new request!')
//     res.send({color: 'red'})
// })

app.get("/", (req, res) => {
    res.send("Welcome to home page!");
});

app.post("/cats", (req, res) => {
    res.send("This is a POST request for /cats");
});

app.get("/cats", (req, res) => {
    res.send("<h1>Meow!</h1>");
});
app.get("/dogs", (req, res) => {
    res.send("Woof!");
});

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the '${subreddit}' subreddit.`);
});

app.get("*", (req, res) => {
    console.log("I don't know that path.");
});

app.listen(3000, () => {
    console.log("Listening port 3000!");
});
