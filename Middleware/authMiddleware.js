//jwt.verify
import jwt from "jsonwebtoken";
import User from "../Models/UserSchema.js";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = async (req, res, next) => {
  //   const token = req.header("Authoriztion");
  const token = req.headers.authorization?.split("")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decode;
    console.log(req.user);
    const user = await User.findbyId(req.user_id);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Access Denied Not a Valid User" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Invalid Token Internal Sever Error" });
  }
};

export default authMiddleware;