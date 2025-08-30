const express = require("express");

const authSchema = require("../Schema/authSchema");
const {
  createUser,
  getUsers,
  loginUsers,
  sendOtp,
  verifyOtp,
  resetPasswort,
} = require("../Controler/authControler");

const router = express.Router();

//Create New User API
router.post("/", createUser);
router.get("/", getUsers);
router.post("/login", loginUsers);
router.post("/sendotp", sendOtp);
router.post("/verifyotp", verifyOtp);
router.post("/resetPasswort", resetPasswort);

module.exports = router;
