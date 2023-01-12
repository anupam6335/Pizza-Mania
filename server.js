require("dotenv").config();
const express = require("express");

const app = express();
const db = require("./db.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working 🔥");
});

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);
