const express = require("express");
const { use } = require("../../app");
const { registerUser, 
    fetchUsersCtrl,
 } = require("../../contollers/users/usersCtrl");

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.get("/", fetchUsersCtrl);

module.exports = userRoute;