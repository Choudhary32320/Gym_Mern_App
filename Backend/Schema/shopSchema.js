const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    description: { type: String },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShopSchema", ShopSchema);
