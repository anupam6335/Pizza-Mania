const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull πΊπΊπΊ");
});

db.on("error", () => {
  console.log(`π’ π’ Mongo DB Connection failed  π’ π’ π’`);
});

module.exports = mongoose;
