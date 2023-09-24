import express from "express";
import { signUpUser, loginUser,upDateUser ,getUser} from "../Controller/user-controller.js";
import { authenticateToken } from "../Controller/jwt-controller.js";
import {
  createbooking,
  getAllBooking,
  getUserBooking,deletBooking,updateBooking,getAccepterBooking
} from "../Controller/booking-controller.js";
import { uploadImage, getImage } from "../Controller/image-contorller.js";
import upload from "../utils/upload.js";

import {
  createRider,
  getRider,
  updateRider,
} from "../Controller/reider-controller.js";
const Routes = express.Router();

Routes.post("/signUp", signUpUser);
Routes.post("/login", loginUser);
Routes.put("/updateUser/:id",authenticateToken,upDateUser)
Routes.get("/getUser/:username",authenticateToken,getUser)
Routes.post("/booking", authenticateToken,createbooking);
Routes.get("/getactiveBooking/:username", authenticateToken ,getAllBooking);
Routes.get("/getUserBooking/:username", authenticateToken ,getUserBooking);
Routes.delete("/deletuserBooking/:username",authenticateToken,deletBooking)
Routes.put("/updateBooking/:id",authenticateToken,updateBooking)
Routes.get("/bookingAccepter/:username",authenticateToken,getAccepterBooking )
Routes.post("/upload", upload.single("file"), uploadImage);
Routes.get("/file/:filename", getImage);

Routes.post("/riderRegisteration", authenticateToken,createRider);
Routes.get("/getRider/:username", authenticateToken,getRider);
Routes.put("/updateRider/:id", authenticateToken,updateRider);
export default Routes;
