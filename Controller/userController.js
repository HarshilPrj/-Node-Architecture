const express = require("express");
const UserController = express.Router();
const { getdata, login } = require("../services/userService");

UserController.get("/list", async (req, res) => {
  const _userResponse = await getdata();
  res.status(200).send(_userResponse);
});

UserController.post("/login", async (req, res) => {
  const _userResponse = await login(req.body.email, req.body.password);
  res.status(200).send(_userResponse);
});

module.exports = UserController;
