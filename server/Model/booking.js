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
        type  : String,
        requierd : true
    },
    status :{
      type : Number,
      requierd  :true
    },
    isRider :{
      type: Boolean
    },
    isStudent:{
      type:Boolean
    },
  UserId : [{
    type  : Schema.Types.ObjectId,
    ref : 'user'
  }]

})

const token = mongoose.model('Booking' , bookingSchema)

export default token;