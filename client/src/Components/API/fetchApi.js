import axios from 'axios'
const base = "http://localhost:4000";

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
 
 export const signupUser = async (data) => {
   try {
     return await axios.post(base.concat("/signUp"), data);
   } catch (error) {
     console.log(error);
   }
 };