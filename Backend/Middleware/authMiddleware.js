const jwt = require("jsonwebtoken");
const authSchema = require("../Schema/authSchema");

const Protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //1- Get the token
      token = req.headers.authorization.split(" ")[1];

      //2- Verify it
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

      //3- Get user from token using their id
      req.user = await authSchema.findById(verifyToken.id).select("-password");
    } catch (error) {
      res.status(400).json({ message: "Token not found" });
    }
  }
};
module.exports = { Protect };
