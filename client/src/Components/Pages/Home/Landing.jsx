// import React, { useState } from "react";
// import { TextField, Button, Box, styled, Typography } from "@mui/material";
// import RequestCard from "../Card/RequestCard.jsx";
// // import '../../../index.css'
// const Container = styled(Box)`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   height: 100vh;
//   justify-content: center;
//   flex-direction: column;
//   background-color: #f0f0f0; /* Light gray background */
// `;

// const InnerBox = styled(Box)`
//   border: 1px solid #000;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-top: -400px;
//   padding: 20px;
//   margin-bottom: 10px;
//   background-color: #fff; /* White background for the form box */
// `;

// const To = styled(TextField)`
//   margin-top: 10px;
//   width: 40%;
//   margin-right: 10px;
//   margin-left: 10px;
//   input {
//     color: "#000";
//     background-color: "#f0f0f0"; /* Light gray background */
//   }
// `;

// const From = styled(TextField)`
//   margin-top: 10px;
//   width: 40%;
//   margin-right: 10px;
//   margin-left: 10px;
//   input {
//     color: "#000";
//     background-color: "#f0f0f0"; /* Light gray background */
//   }
// `;

// const LeavingTime = styled(TextField)`
//   margin-top: 10px;
//   width: 40%;
//   margin-right: 10px;
//   margin-left: 10px;
//   input {
//     color: "#000";
//     background-color: "#f0f0f0"; /* Light gray background */
//   }
// `;
// const InitialForm = {
//   from: "",
//   to: "",
//   leavingTime: "",
// };
// const Amiboard = () => {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [leavingTime, setLeavingTime] = useState("");
//   const [Form, setForm2] = useState(InitialForm);
//   const [showRequest, setShowRequest] = useState(false);
//   const [missingFields, setMissingFields] = useState([]);

//   const handleRequest = () => {
//     // Check for missing fields
//     const missing = [];
//     if (!from.trim()) missing.push("Starting Point");
//     if (!to.trim()) missing.push("Destination");
//     if (!leavingTime.trim()) missing.push("Leaving Time");

//     if (missing.length > 0) {
//       // If any fields are missing, set the missingFields state
//       setMissingFields(missing);
//       return;
//     }

//     // Implement your ride request logic here
//     setForm2({
//       to: to,
//       from: from,
//       leavingTime: leavingTime,
//     });
//     // For demonstration purposes, we'll just show the request details
//     setShowRequest(true);

//     // Clear the missing fields when the request is successful
//     setMissingFields([]);
//   };

//   return (
//     <Container>
//       <InnerBox>
//         <To
//           id="standard-basic"
//           label="Starting Point"
//           variant="standard"
//           onChange={(e) => setFrom(e.target.value)}
//           name="from"
//         />
//         <From
//           id="standard-basic"
//           label="Destination"
//           variant="standard"
//           onChange={(e) => setTo(e.target.value)}
//           name="to"
//         />
//         <LeavingTime
//           id="standard-basic"
//           label="Leaving Time"
//           variant="standard"
//           onChange={(e) => setLeavingTime(e.target.value)}
//           name="leavingTime"
//         />
//         <Button
//           onClick={handleRequest}
//           variant="outlined"
//           style={{ color: "#000", borderColor: "#000", marginTop: "10px" }}
//         >
//           Request Ride
//         </Button>
//       </InnerBox>
//       {missingFields.length > 0 && (
//         <Typography variant="body1" style={{ color: "red", marginTop: "10px" }}>
//           Please fill in the following fields: {missingFields.join(", ")}
//         </Typography>
//       )}
//       {showRequest && <RequestCard form={Form} />}
//     </Container>
//   );
// };

// export default Amiboard;

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import BackgroundImage from "../../Image/A.jpg";
import{ useState, useEffect } from 'react';
import { height, maxHeight } from '@mui/system';
const containerStyle = {
  backgroundColor: '#0d264c',
  minHeight: '100vh',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const ButtonStyle={
  backgroundColor:'white',
  color: '#ff9000',
  marginTop:'30px',
  height:'40px'
}

const textStyle = {
  textAlign: 'center', // Center text within its container
};
 
const BoxStyle1={
  backgroundColor:'#ff9000',
  display: 'inline-block', 
  maxWidth: 'auto', 
  borderRadius: '10px', 
};

const BoxStyle2={

  backgroundColor:'#ff9000',
  display: 'inline-block', 
  maxWidth: 'auto', 
  borderRadius: '10px', 
};

const BoxStyle3={

  backgroundColor:'#ff9000',
  marginRight:'30px',
  display: 'inline-block', 
  maxWidth: 'auto', 
  borderRadius: '10px', 
};

const image_container= {
  width: '800px',
  height: '250px',
  overflow: 'hidden',
  object_fit:'cover',
}


export default function BasicSelect() {
  const [selectedFrom, setSelectedFrom] = React.useState('');
  const [time, setTime] = useState(new Date());
  const handleChange = (event) => {
    setSelectedFrom(event.target.value);
  };
  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={image_container}>
      <img src={BackgroundImage } />
      </div>
      <h1 style={textStyle}>
        <span style={{ color: '#ff9000' }}>Book your</span><span style={{color:'white'}}> own ride
</span>       
</h1>
<div style={{ display: 'flex', justifyContent: 'space-between' }}>
<Box sx={{ minWidth: 180,borderradius:50 }} style={BoxStyle1}>
  <FormControl fullWidth>
    <InputLabel id="from-select-label">From</InputLabel>
    <Select
      labelId="from-select-label"
      id="from-select"
      value={selectedFrom}
      onChange={handleChange}
      style={{ width: '100%', fontSize: '14px' }} // Add this style
    >
      <MenuItem value={10}>Amity</MenuItem>
      <MenuItem value={20}>Panvel Station</MenuItem>
      <MenuItem value={30}>India Bulls</MenuItem>
      <MenuItem value={30}>Ajivali</MenuItem>
    </Select>
  </FormControl>
</Box><div style={{ backgroundColor: 'white',marginTop:'25px', height: '2px', width: '170px' }} />

<Box sx={{ minWidth: 180,borderradius:10 }} style={BoxStyle2}>
        <FormControl fullWidth>
          <InputLabel id="to-select-label">To</InputLabel>
          <Select
            labelId="to-select-label"
            id="to-select"
            value={selectedFrom}
            onChange={handleChange}
          >
            <MenuItem value={10}>Amity</MenuItem>
            <MenuItem value={20}>Panvel Station</MenuItem>
            <MenuItem value={30}>India Bulls</MenuItem>
            <MenuItem value={30}>Ajivali</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div style={{ backgroundColor: 'white',marginTop:'25px', height: '2px', width: '170px' }} />
      <Box sx={{ minWidth: 180,borderradius:10 }} style={BoxStyle3}>
        <FormControl fullWidth>
          <InputLabel id="leaving-time-select-label">Leaving Time</InputLabel>
          <Select
              labelId="leaving-time-select-label"
              id="leaving-time-select"
              value={selectedFrom}
              onChange={handleChange}
            >
          </Select>
        </FormControl>
      </Box>
      </div>
      <Button variant="contained" style={ButtonStyle}>Request</Button>
    </div>
  );
}
