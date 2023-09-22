import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
  username: {
    type: String,
    requierd: true,
  },
  picture :{
     type : String
  },
  email: {
    type: String,
    requierd: true,
  },
  EnrollNO: {
    type: String,
    requierd: true,
  },
  mobile :{
    type : String
  }
});
const Rider = mongoose.model('Pilen',StudentSchema)
export default  Rider
