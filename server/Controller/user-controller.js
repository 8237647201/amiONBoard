import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Model/user.js";
import token from "../Model/token.js";
import dotEnv from "dotenv";
import { validate } from "email-validator";
dotEnv.config();

export const signUpUser = async (req, res) => {
  try {
    // checking the correct formate of email
    if (!validate(req.body.email)) {
      return res.status(401).json({ msg: "Email format is not valid" });
    }

    if (!validatePassword(req.body.password)) {
      return res
        .status(401)
        .json({
          msg: "Password should have at least one number and one special character",
        });
    }
    const hash = await bcrypt.hash(req.body.password, 10);

    const newUser = new User({
      username: req.body.username,
      fullName: req.body.fullName,
      password: hash,
      email: req.body.email,
      mobile: req.body.mobile,
      isRider: req.body.isRider,
      isStudent: req.body.isStudent,
      isProfileCompleted: req.body.isProfileCompleted,
      profilePicture: req.body.profilePicture,
    });
    console.log(newUser);
    await newUser.save();

    return res.status(200).json({
      msg: "signUp successfull",
    });
  } catch (error) {
    console.error("Error saving data to MongoDB:", error);
    return res.status(500).json({
      message: "signUp failed",
    });
  }
};

export const loginUser = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  try {
    let match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const accesToken = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
        expiresIn: "20m",
      });
      const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_KEY);

      const newToken = new token({ token: refreshToken });
      await newToken.save();

      return res.status(200).json({
        accesToken: accesToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
        isRider: user.isRider,
        isStudent: user.isStudent,
      });
    } else {
      return res.status(400).json({ msg: "password does not match" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error while login the user" });
    console.log(error);
  }
};

export const upDateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      const response = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json({ userUpdated: true });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error while login the user" });
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (user) {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ msg: "Error while login the user" });
    console.log(error);
  }
};

//checking password
const validatePassword = (password) => {
  // Check for at least one character
  const hasCharacter = /[a-zA-Z]/.test(password);

  // Check for at least one number
  const hasNumber = /\d/.test(password);

  // Check for at least one special character
  const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  // Return true if all conditions are met
  return hasCharacter && hasNumber && hasSpecialChar;
};
