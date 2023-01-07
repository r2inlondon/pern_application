const express = require("express");
const app = express();

// middleware
app.use(cors());

app.listen(5000, () => {
  console.log("server is starting on port 5000");
});
