const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

const port = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/uploads", express.static(path.join(__dirname, "uploadedImages")));

const DB_URL = process.env.MONGO_URI || "mongodb://localhost:27017/";

//Mongodb connection
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

//item api
app.use("/api/item", require("./Routes/shopRoutes"));
app.use("/api/auth", require("./Routes/authRoutes"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
