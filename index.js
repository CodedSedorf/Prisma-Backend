const express = require("express");
const cookierParser = require("cookie-parser")
const app = express();
require("dotenv").config()
const PORT = process.env.PORT


//Regular Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Cookie Middleware
app.use(cookierParser())


const userRouter = require("../Prisma Backend/routes/userRoute");

app.use("/api", userRouter)



app.get("/", (req, res) =>{
    res.send("Welcome to Prisma Backend fellow developers")
})

app.listen(PORT, ()=>{
    console.log(`This app is listening on port ${PORT}`);
})