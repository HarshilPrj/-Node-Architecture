const express = require("express");
const router = express.Router();
const pkg = require("./package.json");
const userRoutes = require("./routers/usersRouter");

router.use(`/api/v${parseInt(pkg.version)}/users`, userRoutes);

module.exports = router;
