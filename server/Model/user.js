import mongoose, { SchemaType } from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
  fullName: {
    required: true,
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    requierd: true,
    unique: true,
  },
  profilePicture: {
    type: String,
    
  },
  mobile: {
    type: String,
    requierd: true,
    min: 10,
    max: 10,
  },
  isRider: {
    type: Boolean,
   
  },
  isStudent: {
    type: Boolean,
   
  },
  isProfileCompleted :{
    type : Boolean
  },
  EnrollNO: {
    type: String,
    requierd: true,
  },
  password: {
    type: String,
    requierd: true,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
