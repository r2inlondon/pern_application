const Pool = require("pg").Pool;

const pool = new Pool({
  user: "hr_admin",
  password: "gol)Red49",
  host: "localhost",
  database: "pern_application",
  port: 5432,
});

module.exports = pool;
