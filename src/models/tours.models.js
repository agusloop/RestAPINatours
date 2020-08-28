const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A tour must have a name"],
      unique: true,
    },
    duration: {
      type: Number,
      required: [true, "A tour must have a duration"],
    },
    maxGroupSize: {
      type: Number,
      required: [true, "A tour must have a group size"],
    },
    ratingsAvarage: { type: Number, default: 4.5 },
    ratingsQuantity: { type: Number, default: 0 },
    price: {
      type: Number,
      required: [true, "A tour must have a price"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: [true, "A tour must have a difficulty"],
    },
    priceDisscount: Number,
    summary: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, "A tour must have a Image Cover"],
    },
    images: [String],
    startDates: [Date],
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("tours", tourSchema);
