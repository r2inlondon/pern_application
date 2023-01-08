const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// middleware
app.use(cors());
app.use(express.json()); // => allow us to access the req.body

// ROUTES

// get all candidates
app.get("/all", async (req, res) => {
  try {
    const allCandidates = await pool.query("SELECT * FROM candidate;");
    res.json(allCandidates.rows);
  } catch (err) {
    console.error(err);
  }
});

// create candidate
app.post("/new", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      gender,
      email,
      question1,
      question2,
      question3,
    } = req.body;

    console.log(gender);

    const query = {
      text: "INSERT INTO candidate (firstName, lastName, gender, email, question1, question2, question3) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      values: [
        firstName,
        lastName,
        gender,
        email,
        question1,
        question2,
        question3,
      ],
    };

    const newCandidate = await pool.query(query);

    res.json(newCandidate.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server is starting on port 5000");
});
