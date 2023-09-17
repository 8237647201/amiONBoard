import axios from "axios"


export const getAccessToken = () => {
  return sessionStorage.getItem("accessToken");
};
export const setHeaders = (token)=>{
   if(token){
     axios.defaults.headers={
       authorization  : token
     }
   }else {
     delete axios.defaults.headers.authorization
   }
}