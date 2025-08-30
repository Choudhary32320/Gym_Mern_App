const authSchema = require("../Schema/authSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
require("dotenv").config();

// ====================== Generate jwt token

const jwtToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10d" });
};

// ======================  Create new user
const createUser = async (req, res) => {
  console.log("Incoming body:", req.body); // 👀 should now show { name, email, password }

  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingUser = await authSchema.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const user = await authSchema.create({
      name,
      email,
      password: hashedpassword,
    });

    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: jwtToken(user._id),
    });
  } catch (error) {
    console.error("POST /workout error:", error);
    res.status(500).json({ message: "Server error while creating user." });
  }
};

// ====================== Get all users
const getUsers = async (req, res) => {
  try {
    const users = await authSchema.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve users", error: error.message });
  }
};

// ======================== Login User
const loginUsers = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await authSchema.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong credentials" });
    }

    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: jwtToken(user._id),
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error while logging in" });
  }
};

// ======================== forgot password
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.BUSINESS_MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    
    const user = await authSchema.findOne({ email });
    if (!user) {
      // For security, don't reveal if email exists or not
      return res.status(200).json({ message: "If the email exists, OTP has been sent" });
    }
    
    const buffer = crypto.randomBytes(4);
    const otptoken = (buffer.readUInt32BE(0) % 9600000) + 100000;
    
    user.resetPasswordToken = otptoken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    const mailOptions = {
      from: process.env.BUSINESS_MAIL,
      to: email,
      subject: "OTP for Password Reset",
      text: `Your OTP for password reset is ${otptoken}. It expires in 1 hour.`,
    };
    
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email send error:", error);
        return res.status(500).json({ message: "Failed to send OTP email" });
      }
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "OTP sent successfully" });
    });
  } catch (error) {
    console.error("Send OTP error:", error);
    res.status(500).json({ message: "Server error while sending OTP" });
  }
};

const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;
  const user = await authSchema.findOne({
    email,
    resetPasswordToken: otp,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (user) {
    res.status(200).json({ message: "OTP verified successfully" });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
};

const resetPasswort = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const user = await authSchema.findOne({ email });
    const hashedpassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedpassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res
      .status(500)
      .json({ message: "Failed to retrieve users", error: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  loginUsers,
  sendOtp,
  verifyOtp,
  resetPasswort,
};
