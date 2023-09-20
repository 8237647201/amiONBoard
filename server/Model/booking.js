import mongoose from "mongoose";
const Schema = mongoose.Schema
const bookingSchema =  new Schema({
    username :{
     type : String,
     requierd : true
    },
    from : {
        type : String,
        requierd : true
    },
    to :{
        type : String,
        requierd  :true
    },
    leaveTime : {
        type  :Date,
        requierd : true
    },
    status :{
      type : Boolean,
      requierd  :true
    },
  UserId : [{
    type  : Schema.Types.ObjectId,
    ref : 'user'
  }]

})

const token = mongoose.model('Booking' , bookingSchema)

export default token;