import express from "express";
import { signUpUser, loginUser } from "../Controller/user-controller.js";
import { authenticateToken } from "../Controller/jwt-controller.js";
import {
  createbooking,
  getAllBooking,
  getUserBooking,deletBooking
} from "../Controller/booking-controller.js";
import { uploadImage, getImage } from "../Controller/image-contorller.js";
import upload from "../utils/upload.js";
import {
  createPilean,
  getPilean,
  updatePilean,
} from "../Controller/pilean-controller.js";
import {
  createRider,
  getRider,
  updateRider,
} from "../Controller/reider-controller.js";
const Routes = express.Router();

Routes.post("/signUp", signUpUser);
Routes.post("/login", loginUser);
Routes.post("/booking", authenticateToken,createbooking);
Routes.get("/getactiveBooking/:username", authenticateToken ,getAllBooking);
Routes.get("/getUserBooking/:username", authenticateToken ,getUserBooking);
Routes.delete("/deletuserBooking/:username",authenticateToken,deletBooking)
Routes.post("/upload", upload.single("file"), uploadImage);
Routes.get("/getImage", getImage);
Routes.post("/pillianRegisteration", authenticateToken, createPilean);
Routes.get("/getPillian", authenticateToken,getPilean);
Routes.put("/updatePillian/:id", authenticateToken,updatePilean);
Routes.post("/riderRegisteration", authenticateToken,createRider);
Routes.get("/getRider/:id", authenticateToken,getRider);
Routes.put("/updateRider/:id", authenticateToken,updateRider);
export default Routes;
