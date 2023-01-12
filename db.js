const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull 🕺🕺🕺");
});

db.on("error", () => {
  console.log(`😢 😢 Mongo DB Connection failed  😢 😢 😢`);
});

module.exports = mongoose;
