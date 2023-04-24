const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  fullName: { type: String, require: true },
  phone: { type: String, require: true },
  email: { type: String, require: true },
  county: { type: String, require: true },
  city: { type: String, require: true },
  postalCode: { type: String },
  street: { type: String, require: true },
  number: { type: String, require: true },
  otherInfo: { type: String },
  orderedProducts: { type: Array, require: true },
  orderValue: { type: Number, require: true },
  isShipped: { type: Boolean, default: false },
});

module.exports = mongoose.model("Order", orderSchema);
