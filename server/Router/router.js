import express from "express";
import { signUpUser, loginUser } from "../Controller/user-controller.js";
import { authenticateToken } from "../Controller/jwt-controller.js";
import {
  createbooking,
  getAllBooking,
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
Routes.post("/booking", createbooking);
Routes.get("/getactiveBooking", getAllBooking);
Routes.post("/upload", upload.single("file"), uploadImage);
Routes.get("/getImage", getImage);
Routes.post("pillianRegisteration", createPilean);
Routes.get("/getPillian/:id", getPilean);
Routes.put("/updatePillian/:id", updatePilean);
Routes.post("/riderRegisteration", createRider);
Routes.get("/getRider/:id", getRider);
Routes.put("/updateRider/:id", updateRider);
export default Routes;
