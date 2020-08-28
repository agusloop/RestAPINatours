const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db_uri = process.env.DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(db_uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connections;
    console.log("Db is connected");
  } catch (error) {
    console.log(error);
  }
};

connectDB();
