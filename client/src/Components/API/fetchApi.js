import { getAccessToken } from '../utils/common-function';
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
       return await axios.get(base.concat(`/getactiveBooking/${username}`),{
        authorization: getAccessToken(),
      }) 
    } catch (error) {
       console.log(error)
    }
  }

  //getting the user request detailed 

  export const getUserBooking = async(username)=>{
    try {
      return await axios.get(base.concat(`/getUserBooking/${username}`),{
        authorization: getAccessToken(),
      })
    } catch (error) {
       console.log(error)
    }
  }


  //update bookign

  export const updateBooking =async(id,data)=>{
    console.log(data)
    try {
       return await axios.put(base.concat(`/updateBooking/${id}`),data)
    } catch (error) {
      console.log(error)
    }
  }


  // getting status of bookling 

  export const getAccepter = async(username)=>{
    try {
      return await axios.get(base.concat(`/bookingAccepter/${username}`))
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

  //updatingUser

  export const updateUser = async(id,data)=>{
    try {
      return await axios.put(base.concat(`/updateUser/${id}`),data)
    } catch (error) {
      console.log(error)
    }
  }
//getting user
  export const getUser=async(username)=>{
    try {
      return axios.get(base.concat(`/getUser/${username}`))
    } catch (error) {
      console.log(error)
    }
  }

  //uploading Image
 export const uploadImage = async(data)=>{
       try {
         return axios.post(base.concat("/upload"),data)
       } catch (error) {
        console.log(error)
       }
 }

 export const CreateRider = async(data)=>{
  try {
    return axios.post(base.concat("/riderRegisteration"),data)
  } catch (error) {
    console.log(error)
  }
 }

 export const getRider = async(username)=>{
  try {
     return axios.get(base.concat(`/getRider/${username}`))
  } catch (error) {
    console.log(error)
  }
 }

