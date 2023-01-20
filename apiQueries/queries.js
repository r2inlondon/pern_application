const pool = require("./db");

const createTable = async () => {
  const query =
    "CREATE TABLE IF NOT EXISTS candidate ( c_id serial PRIMARY KEY, firstname VARCHAR (100) NOT NULL, lastname VARCHAR (100) NOT NULL, gender VARCHAR ( 10 ) NOT NULL, email VARCHAR (255) UNIQUE NOT NULL, question1 VARCHAR ( 50 ) NOT NULL, question2 VARCHAR ( 50 ) NOT NULL, question3 VARCHAR ( 50 ) NOT NULL);";

  const newTable = await pool.query(query);
};

const newCandidate = async (req, res) => {
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

    res.json("Candidate was created !");
  } catch (err) {
    console.error(err.message);
    res.json(err.detail);
  }
};

const getAllCandidates = async (req, res) => {
  try {
    const allCandidates = await pool.query("SELECT * FROM candidate;");
    res.json(allCandidates.rows);
  } catch (err) {
    console.error(err);
  }
};

const getOneCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    const candidate = await pool.query(
      "SELECT * FROM candidate WHERE c_id = $1;",
      [id]
    );
    res.json(candidate.rows);
  } catch (err) {
    console.error(err);
    res.json(err.detail);
  }
};

const updateCandidate = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      gender,
      email,
      question1,
      question2,
      question3,
    } = req.body;

    const { id } = req.params;

    const query = {
      text: "UPDATE candidate SET firstname = $1, lastname = $2, gender = $3, email = $4, question1 = $5, question2 = $6, question3 = $7 WHERE c_id = $8",
      values: [
        firstname,
        lastname,
        gender,
        email,
        question1,
        question2,
        question3,
        id,
      ],
    };

    const candidate = await pool.query(query);
    res.json("Candidate has been UPDATED");
  } catch (err) {
    console.error(err.message);
    res.json(err.detail);
  }
};

const deleteCandidate = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM candidate WHERE c_id = $1", [id]);
    res.json("Candidate has been DELETED");
  } catch (err) {
    console.error(err);
    res.json(err.detail);
  }
};

module.exports = {
  createTable,
  newCandidate,
  getAllCandidates,
  getOneCandidate,
  updateCandidate,
  deleteCandidate,
};
