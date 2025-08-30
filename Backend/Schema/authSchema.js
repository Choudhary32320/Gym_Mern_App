const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: true, // fixed spelling
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    // FORGOT PASSWORD FIELDS
    otp: {
      type: String, // Store OTP (hashed or plain depending on security)
    },
    resetPasswordToken: {
      type: String, // Token if using link-based reset
    },
    resetPasswordExpires: {
      type: Date, // Expiry for link-based reset
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("authSchema", authSchema);
