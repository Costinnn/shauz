const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, require: true, unique: true },
  images: { type: Array, require: true },
  desc: { type: String, require: true },
  stockQ: { type: Object, require: true },
  category: { type: Array },
  price: { type: Number, require: true },
  oldPrice: { type: Number },
  sale: { type: Boolean, default: false },
  cartQ: { type: Number, default: 0 },
  cartSize: { type: String },
});

module.exports = mongoose.model("Product", productSchema);
