import * as React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button } from "@mui/material";
import RiderRegisteraion from "./RiderRegisteraion";
import StudentRegistreration from "./StudentRegistreration";

const Container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#0d264c",
  height: "100vh",
  color: "white",
  textDecoration: "none",
  color: "black",
  
};

const FormStyle = {
  border : "2px solid white",
  padding :"70px",
  borderRadius :"50px",
  background : "white",
  color : "black"
};

const Profile = () => {

    const [profile,setProfile] = useState()
  
    const handelInput =(e)=>{
      
       console.log(profile)

       //calling user update API
    }

  return (
    // <Box style={Container}>
    //   <FormControl  style={FormStyle} >
    //     <FormLabel 
    //       id="demo-row-radio-buttons-group-label"
    //       style={{ fontSize: "30px", color: "black" }}
    //     >
    //       Select Profile
    //     </FormLabel>
    //     <RadioGroup
    //       row
    //       aria-labelledby="demo-row-radio-buttons-group-label"
    //       name="row-radio-buttons-group"
    //     >
    //       <FormControlLabel
    //         value="student"
    //         control={<Radio />}
    //         label="Student"
    //         name="student"
    //         onChange={(e)=>setProfile("student")}
    //       />
    //       <FormControlLabel
    //         value="rider"
    //         control={<Radio style={{ fontSize: "20px" }} />}
    //         label="Rider"
    //         name ='rider'
    //         onChange={(e)=>setProfile("rider")}
    //       />
    //     </RadioGroup>
    //     <Button variant="outlined" style={{marginTop :'20px'}} onClick={handelInput} >Next</Button>
    //   </FormControl>
    // </Box>
    <RiderRegisteraion/>
    // <StudentRegistreration/>
  );
};

export default Profile;
