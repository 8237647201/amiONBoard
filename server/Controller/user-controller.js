import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Model/user.js";
import token from "../Model/token.js";
import dotEnv from "dotenv";
import UserData from "../classes/User.js";
dotEnv.config();

export const signUpUser = async (req, res) => {
  try {
    const newUser = new UserData(
      req.body.username,
      req.body.email,
      req.body.password,
      req.body.fullName,
      req.body.isRider,
      req.body.isStudent,
      req.body.profilePicture,
      req.body.mobile,
      req.body.isProfileCompleted
    );
    console.log(newUser.password);
    // checking the correct formate of email
    if (!newUser.emailValidator()) {
      return res.status(401).json({ msg: "Email format is not valid" });
    }

    if (!newUser.validatePassword0()) {
      return res.status(401).json({
        msg: "Password should have at least one number and one special character",
      });
    }

    await newUser.encryptPassword();

    const user = User({
      username: newUser.username,
      fullName: newUser.fullName,
      password: newUser.password,
      email: newUser.email,
      mobile: newUser.mobile,
      isRider: newUser.isRider,
      isStudent: newUser.isStudent,
      isProfileCompleted: newUser.isProfileCompleted,
      profilePicture: newUser.profilePicture,
    });

    await user.save();

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
    const User = new UserData(
      user.username,
      user.email,
      user.password,
      user.fullName,
      user.isRider,
      user.isStudent,
      user.profilePicture,
      user.mobile,
      user.isProfileCompleted
    );

    // let match = await bcrypt.compare(req.body.password, user.password);

    if (await User.validatePassword(req.body.password)) {

      //generating accesToken
      const accesToken = await User.getAccesToken(req.body.password);
      const refreshToken = await User.getRefreshToken(req.body.password);

      //saving token

      const newToken = new token({
        token: refreshToken,
      });
      await newToken.save();

      return res.status(200).json({
        accesToken: accesToken,
        refreshToken: refreshToken,
        name: User.name,
        username: User.username,
        isRider: User.isRider,
        isStudent: User.isStudent,
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
