const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); // => allow us to access the req.body

// ROUTES

// get all candidates

// create candidate
app.post("/new", async (req, res) => {
  try {
    res.json(req.body);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server is starting on port 5000");
});
