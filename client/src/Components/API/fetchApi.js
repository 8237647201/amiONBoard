import axios from 'axios'
const base = "http://localhost:4000";

//login user

export const logginUser = async (data) => {
   try {
     let r = await axios.post(base.concat("/login"), data);
     if (r) {
       return r;
     } else {
       return false;
     }
   } catch (error) {
     console.log(error);
   }
 };
 //signup user
 export const signupUser = async (data) => {
  console.log(data)
   try {
     return await axios.post(base.concat("/signUp"), data);
   } catch (error) {
     console.log(error);
   }
 };

 //creating Booking

 export const creatBooking = async(data)=>{
   try {
       return await axios.post(base.concat("/booking"),data)  
   } catch (error) {
     console.log(error)
   }
 }

 //get all active booking

  export const getActiveBooking = async(username)=>{
    try {
       return await axios.get(base.concat(`/getactiveBooking/${username}`)) 
    } catch (error) {
       console.log(error)
    }
  }

  //getting the user request detailed 

  export const getUserBooking = async(username)=>{
    try {
      return await axios.get(base.concat(`/getUserBooking/${username}`))
    } catch (error) {
       console.log(error)
    }
  }

  //deleting user bokking

  export const deletUserBooking= async(username)=>{
    try {
      return await axios.delete(base.concat(`/deletuserBooking/${username}`))
    } catch (error) {
      console.log(error)
    }
  }