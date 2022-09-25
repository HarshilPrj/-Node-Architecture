require("dotenv").config();
const express = require("express");
const router = require("./route");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});

