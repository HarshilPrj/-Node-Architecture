require("dotenv").config();
const kenx = require("knex");
const { Model } = require("objection");

const DB = kenx({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
});

Model.knex(DB);

module.exports = Model;
