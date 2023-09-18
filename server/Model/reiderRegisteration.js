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
  DLpdf: {
    type: String,
    requierd: true,
  },
});
const Rider = mongoose.model('Rider',RiderSchema)
module.exports = Rider
