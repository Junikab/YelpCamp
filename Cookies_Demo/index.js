const express = require('express')
const app = express()
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/greet", (req,res)=>{
    res.send("Hello World!")
})

app.get("/setname", (req,res)=>{
    res.cookie("name", "BOB")
    res.send("Sending you a cookie")
})

app.listen(3000, ()=>{
    console.log("SERVING!")
})