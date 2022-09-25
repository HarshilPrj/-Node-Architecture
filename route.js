const express = require("express");
const parentRouter = express.Router();
const pkg = require("./package.json");

parentRouter.use(`/api/v${parseInt(pkg.version)}/users`);

module.exports = parentRouter;
