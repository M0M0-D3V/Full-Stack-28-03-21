const mongoose = require("mongoose");

const ClothesSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    imgUrl: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    size: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    name: {
      type: String,
      required: [true, "{PATH} is required"],
      minlength: [3, "{PATH} must be at least {MINLENGTH}"],
    },
    price: {
      type: Number,
      required: [true, "{PATH} is required"],
      min: [0, "{PATH} must be at least {MIN}"],
    },
  },
  { timestamps: true }
);

// const Clothes = mongoose.model("Clothes", ClothesSchema)
// module.exports = Clothes

// shorthand another way to write:
module.exports.Clothes = mongoose.model("Clothes", ClothesSchema)