const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const userController = require("../Controler/userControler");

// Update Active Plan
router.put("/plan", authMiddleware, userController.updateActivePlan);

// Get User Details
router.get("/me", authMiddleware, userController.getUserDetails);

module.exports = router;
