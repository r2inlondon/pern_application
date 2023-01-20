const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const {
  createTable,
  newCandidate,
  getAllCandidates,
  getOneCandidate,
  updateCandidate,
  deleteCandidate,
} = require("./apiQueries/queries");

// middleware
app.use(cors());
app.use(express.json()); // => allow us to access the req.body

// Create Table
createTable();

// ROUTES

// create candidate
app.post("/candidates/new", newCandidate);

// Get all candidates
app.get("/candidates", getAllCandidates);

// Get one candidate
app.get("/candidates/:id", getOneCandidate);

// Update candidate
app.put("/candidates/:id", updateCandidate);

// Delete
app.delete("/candidates/:id", deleteCandidate);

// Cath all
app.get("*", (req, res) => {
  res.json("Ooops, Invalid route");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
