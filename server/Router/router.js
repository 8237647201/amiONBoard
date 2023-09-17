import express from "express";
import {signUpUser,loginUser} from '../Controller/user-controller.js'

const Routes = express.Router();

Routes.post("/signUp", signUpUser);
Routes.post("/login", loginUser);

export default Routes;