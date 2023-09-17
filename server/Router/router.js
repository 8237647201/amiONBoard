import express from "express";
import { signUpUser, loginUser } from "../Controller/user-controller.js";
import { authenticateToken } from "../Controller/jwt-controller.js";
import { booking } from "../Controller/booking-controller.js";
const Routes = express.Router();

Routes.post("/signUp", signUpUser);
Routes.post("/login", loginUser);
Routes.post("/booking",  booking);

export default Routes;
