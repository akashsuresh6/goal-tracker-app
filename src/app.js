const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const userRoute = require("./routes/users/usersRoute");

const app = express();
//env file
dotenv.config();

const logger = (req, res, next) => {
    console.log("Am a logger");
    next();
};

app.use(logger);


//dbConnect
dbConnect();

//middlewares
app.use(express.json());

//routes admin ynte aan later comment
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
    res.json({ msg: "Welcome to Goal Tracker API"});
});

//Error
app.use(notFound);
app.use(errorHandler);



//income 
//expenses 
//users 

module.exports = app;

 