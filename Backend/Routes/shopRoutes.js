const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const {
  getItem,
  getSingleItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../Controler/shopControler");

const router = express.Router();

// ensure folder exists
const uploadDir = path.join(__dirname, "../uploadedImages");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// GET all Items
router.get("/", getItem);

// GET single Item
router.get("/:id", getSingleItem);

// ✅ Create Item WITH image
router.post("/", upload.single("image"), createItem);

// Update a Item
router.put("/:id", updateItem);

// Delete a Item
router.delete("/:id", deleteItem);

module.exports = router;
