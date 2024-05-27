import User from "../models/user-model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const signup = async (req, res, Next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    Next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json("signup succesfull");
  } catch (error) {
    Next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    next(errorHandler(400, "All fields are required"));
  }

  try {
    const validuser = await User.findOne({ email });
    if (!validuser) {
      return next(errorHandler(404, "user not found"));
    }

    const validpassword = bcryptjs.compareSync(password, validuser.password);
    if (!validpassword) {
      return next(errorHandler(400, "invalid password"));
    }

    const token = jwt.sign(
      {
        id: validuser._id,
      },
      process.env.JWT_SECRET
    );

    const {password: pass, ...rest} = validuser._doc;
    res
      .status(200)
      .cookie("access token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
