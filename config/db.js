require("dotenv").config();
const mongoose = require("mongoose");
function connectDB() {
  // Database connection 🥳
  try {
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    console.log("Database connected 🥳🥳🥳🥳");
  } catch (error) {
    console.log("connection filed");
  }
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;
