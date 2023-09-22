import mongoose from "mongoose";

const RiderSchema = mongoose.Schema({
  username: {
    type: String,
    requierd: true,
  },
  email: {
    type: String,
    requierd: true,
  },
  BikeNO: {
    type: String,
    requierd: true,
  },
  DLimage: {
    type: String,
    requierd: true,
  },
  profilePicture: {
    type: String,
    requierd: true,
  },
  mobile :{
    type : String
  }
});
const Rider = mongoose.model("Rider", RiderSchema);
export default Rider;
