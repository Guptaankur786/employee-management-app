const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongoURI);
  } catch (error) {
    console.log("MONGODB Connection Failed", error);
  }
};

module.exports = connectDB;
