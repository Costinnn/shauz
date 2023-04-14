const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, require: true, unique: true },
  images: { type: Array, require: true },
  desc: { type: String, require: true },
  stockQ: { type: Object, require: true },
  category: { type: Array },
  price: { type: Number, require: true },
  sale: { type: Boolean, default: false },
});

module.exports = mongoose.model("Product", productSchema);
