const express = require("express");
const userRoutes = express.Router();
const UserController = require("../controller/userController");

userRoutes.use("/", UserController);

module.exports = userRoutes;
