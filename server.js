require("dotenv").config();
const express = require("express");
const Pizza = require('./models/pizzaModel')

const app = express();
const db = require("./db.js");
const path = require('path')

app.use(express.json());
const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')


app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/' , userRoute)
app.use('/api/orders/' , ordersRoute)

app.get("/", (req, res) => {
  res.send("Server is working 🔥");
});

// if(process.env.NODE_ENV ==='production')
// {
    app.use('/' , express.static('./client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , './client/build/index.html'))

    })
// }

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on port port 🔥`);
