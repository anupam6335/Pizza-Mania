require("dotenv").config();
const express = require("express");
const Pizza = require('./models/pizzaModel')

const app = express();
const db = require("./db.js");

app.use(express.json());
const pizzasRoute = require('./routes/pizzasRoute')



app.use('/api/pizzas/', pizzasRoute)

app.get("/", (req, res) => {
  res.send("Server is working 🔥");
});



const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);
