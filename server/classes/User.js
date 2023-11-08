import { validate } from "email-validator";
import bcrypt from "bcrypt";
import dotEnv from "dotenv";
import User from "../Model/user.js";
import jwt from "jsonwebtoken";
dotEnv.config();

class UserData {
  constructor(
    username,
    email,
    password,
    fullName = "",
    isRider = false,
    isStudent = false,
    profilePicture = "",
    mobile = "",
    isProfileCompleted = false,
    EnrollNO = ""
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.fullName = fullName;
    this.isRider = isRider;
    this.isStudent = isStudent;

    this.profilePicture = profilePicture;
    this.mobile = mobile;
    this.isProfileCompleted = isProfileCompleted;
    this.EnrollNO = EnrollNO;
  }

  emailValidator() {
    return validate(this.email);
  }

  async encryptPassword() {
    try {
      const saltRounds = 10;
      if (!this.password) {
        throw new Error("Password is missing");
      }
      this.password = await bcrypt.hash(this.password, saltRounds);
    } catch (error) {
      throw new Error("Error encrypting password: " + error.message);
    }
  }

  validatePassword0() {
    // Check for at least one character
    const hasCharacter = /[a-zA-Z]/.test(this.password);

    // Check for at least one number
    const hasNumber = /\d/.test(this.password);

    // Check for at least one special character
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
      this.password
    );

    // Return true if all conditions are met
    return hasCharacter && hasNumber && hasSpecialChar;
  }

  async validatePassword(password) {
    return await bcrypt.compare(password, this.password);
  }

  getEmail() {
    return this.email;
  }

  getName() {
    return this.fullName;
  }

  getUsername() {
    return this.username;
  }

  getMobile() {
    return this.mobile;
  }

  async getAccesToken(password) {
    let match = await this.validatePassword(password);

    if (match) {
      const user = User({
        username: this.username,
        fullName: this.fullName,
        password: this.password,
        email: this.email,
        mobile: this.mobile,
        isRider: this.isRider,
        isStudent: this.isStudent,
        isProfileCompleted: this.isProfileCompleted,
        profilePicture: this.profilePicture,
      });
      const accesToken = jwt.sign(user.toJSON(), process.env.SECRET_KEY, {
        expiresIn: "20m",
      });
      return accesToken;
    }
  }
  async getRefreshToken(password) {
    let validate = await this.validatePassword(password);
    const user = User({
      username: this.username,
      fullName: this.fullName,
      password: this.password,
      email: this.email,
      mobile: this.mobile,
      isRider: this.isRider,
      isStudent: this.isStudent,
      isProfileCompleted: this.isProfileCompleted,
      profilePicture: this.profilePicture,
    });
    if (validate) {
      return jwt.sign(user.toJSON(), process.env.REFRESH_KEY);
    }
    return "password not match";
  }
}

export default UserData;
