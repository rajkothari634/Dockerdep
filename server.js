const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const tour = require("./tourController");
const cors = require("cors");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/addTour", tour.createTour);

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB successful"))
  .catch((err) => {
    console.log(err);
  });

app.get("/hitodockerdep", (req, res) => {
  console.log(req.url);
  res.status(200).json({
    status: "200",
    message: "hiconnectdep",
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}` + " changed data");
