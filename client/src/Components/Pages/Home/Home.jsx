// import * as React from "react";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import Button from "@mui/material/Button";
// import BackgroundImage from "../../Image/you.jpg";
// import { useState } from "react";
// import Service from "../Service/Service";
// import { useNavigate,Link } from "react-router-dom";

// const containerStyle = {
//   backgroundColor: "white",
//   minHeight: "100vh",
//   padding: "20px",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   width: "100%",
// };

// const ButtonStyle = {
//   backgroundColor: "white",
//   color: "#ff9000",
//   marginTop: "30px",
//   height: "40px",
// };

// const textStyle = {
//   textAlign: "center",
//   fontSize: "24px",
//   fontWeight: "bold",
// };

// const BoxStyle1 = {
//   backgroundColor: "#ff9000",
//   display: "inline-block",
//   maxWidth: "auto",
//   borderRadius: "10px",
// };

// const BoxStyle2 = {
//   backgroundColor: "#ff9000",
//   display: "inline-block",
//   maxWidth: "auto",
//   borderRadius: "10px",
// };

// const BoxStyle3 = {
//   backgroundColor: "#ff9000",
//   marginRight: "30px",
//   display: "inline-block",
//   maxWidth: "auto",
//   borderRadius: "10px",
// };

// export default function BasicSelect() {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [inputValue, setInputValue] = useState({
//     username: "",
//     to: "",
//     from: "",
//     time: "",
//   }); // Added inputValue state
//   const [missingFields, setMissingFields] = useState([]);
//   const [time, setTime] = useState("");

//   const Navigator = useNavigate();


//   const handleChange = (event) => {
//     setFrom(event.target.value);
//   };
//   const handelSecondChange = (event) => {
//     setTo(event.target.value);
//   };
//   const inputTime = (e) => {
//     setTime(e.target.value);
//   };

//   const handleSubmit = () => {
//     setInputValue({
//       username: "",
//       to: to,
//       from: from,
//       time: time,
//     });
//     Navigator("/ride")
//     // history.push('/rider');
//   };

//   return (
//     <div style={containerStyle}>
//       <div
//         style={{
//           width: "800px",
//           height: "250px",
//           overflow: "hidden",
//           objectFit: "cover",
//         }}
//       >
//         <img src={BackgroundImage} alt="Background" />
//       </div>
//       <h1 style={textStyle}>
//         <span style={{ color: "#ff9000" }}>#Book your</span>
//         <span style={{ color: "#ff9000" }}> own ride</span>
//       </h1>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <Box sx={{ minWidth: 180, borderradius: 50 }}>
//           <FormControl fullWidth style={BoxStyle1}>
//             <InputLabel
//               id="from-select-label"
//               style={{ color: "black", fontWeight: "700px" }}
//             >
//               From
//             </InputLabel>
//             <Select
//               labelId="from-select-label"
//               id="from-select"
//               value={from}
//               onChange={handleChange}
//               style={{ width: "100%", fontSize: "15px" }}
//             >
//               <MenuItem value={"Amity"}>Amity</MenuItem>
//               <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>

//               <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
//               <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <div
//           style={{
//             backgroundColor: "white",
//             marginTop: "25px",
//             height: "2px",
//             width: "170px",
//           }}
//         />

//         <Box sx={{ minWidth: 180, borderradius: 10 }}>
//           <FormControl fullWidth style={BoxStyle2}>
//             <InputLabel id="to-select-label">To</InputLabel>
//             <Select
//               labelId="to-select-label"
//               id="to-select"
//               value={to}
//               onChange={handelSecondChange}
//               style={{ width: "100%", fontSize: "14px" }}
//             >
//               <MenuItem value={"Amity"}>Amity</MenuItem>
//               <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>
//               <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
//               <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
//             </Select>
//           </FormControl>
//         </Box>
//         <div
//           style={{
//             backgroundColor: "white",
//             marginTop: "25px",
//             height: "2px",
//             width: "170px",
//           }}
//         />
//         <Box sx={{ minWidth: 180, borderradius: 10 }} style={BoxStyle3}>
//           <input
//             type="text"
//             placeholder="Enter Time"
//             value={time}
//             name="time"
//             onChange={inputTime}
//             style={{
//               width: "98%",
//               height: "91%",
//               margin: "2.5px",
//               borderRadius: "10px",
//               border: "none",
//               backgroundColor: "#ff9000",
//               textAlign: "center",
//               color: "black",
//             }}
//           />
//         </Box>
//       </div>
//       <Button variant="contained" style={ButtonStyle} onClick={handleSubmit}>
//         Request
//       </Button>

//       <Link to="/ride">
//         <Button variant="contained" style={ButtonStyle}>
//           Check for Ride
//         </Button>
//       </Link>
//       {missingFields.length > 0 && (
//         <p style={{ color: "red", marginTop: "10px" }}>
//           Please fill in the following fields: {missingFields.join(", ")}
//         </p>
//       )}

//       <Service />
//     </div>
//   );
// }
// import React, { useState } from "react"; // Import React and useState
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import BackgroundImage from "../../Image/stockimage.jpeg";
// import Service from "../Service/Service";
// import SavingsIcon from "@mui/icons-material/Savings";
// import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
// import PeopleIcon from "@mui/icons-material/People";

// const iconStyle = {
//   fontSize: "50px",
//   color: "#ff9000",
//   alignItems: "center",
//   width: "80%",
// };

// const containerStyle = {
//   backgroundColor: "#f7d9ce",
//   minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "top",
//   justifyContent: "center",
// };

// const ButtonStyle = {
//   position: "relative",
//   bottom: "650px",
//   backgroundColor: "orange",
//   color: "black",
//   marginTop: "20px",
//   marginLeft: "43%",
//   height: "45px",
//   width: "220px",
// };

// const textStyle = {
//   position: "relative",
//   bottom: "300px",
//   textAlign: "center",
// };

// const image_container = {
//   height: "600px",
//   overflow: "hidden",
//   objectFit: "cover",
// };

// const buttonHoverStyle = {
//   backgroundColor: "#7a3517", 
//   color: "red",
// };

// export default function Home() {
//   const [isHovered, setIsHovered] = useState(false); // Initialize isHovered state

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <>
//       <div style={image_container}>
//         <img src={BackgroundImage} style={{ width: "100%" }} alt="Background" />
//       </div>
//       <div style={containerStyle}>
//         <h1 style={textStyle}>
//           <span style={{ color: "#7a3517", fontSize: "35px" }}>Book your</span>
//           <span style={{ color: "#ed530e", fontSize: "35px" }}> own ride! </span>
//         </h1>
//       </div>
//       <div style={{ width: "100%" }}>
//         <Link to="/ride">
//           <button
//             style={{
//               ...ButtonStyle,
//               ...(isHovered && { ...buttonHoverStyle }), // Apply hover styles
//             }}
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             Check for Ride
//           </button>
//         </Link>
//       </div>
//       <Service />
//     </>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import BackgroundImage from "../../Image/stockimage.jpeg";
import Bg1 from "../../Image/Home.jpg";
import{ useState, useEffect } from 'react';
import { height, maxHeight } from '@mui/system';
import SavingsIcon from '@mui/icons-material/Savings';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import PeopleIcon from '@mui/icons-material/People';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';

const iconStyle = {
  fontSize: '50px', 
  color: '#ff9000',
  alignItems:'center',
  width:'80%'   
};
const divstyle={
  width:'1000px',
  color:'#0d264c',
  display:'flex',
  justifyContent:'space-between',

}
const containerStyle = {
  maxHeight: '8vh',
  display: 'flex',
  flexDirection: 'column',
  marginBottom:'0px',
  padding:'0px',
  alignItems: 'top',
  justifyContent: 'center',
};
const ButtonStyle={
  marginBottom:'0px',
  backgroundColor:'white',
  color: '#ff9000',
  marginTop:'90px',
  marginLeft:'43%',
  height:'45px',
  width:'230px',
  transition: 'background-color 0.3s, transform 0.3s', // Add transition for smooth animation
  transformOrigin: 'center',
  hoverButtonStyle:"transform: 'scale(2.0)'", 
}

const textStyle = {
marginTop:'100px',
 marginBottom:'20px',
  textAlign: 'center', 
  animation: 'moveRight 3s infinite',
};
const image_container= {
  height:'550px',
  overflow:'hidden',
  object_fit:'cover',
}
const animatedTextStyle = {
  color:'black',
  animation: 'moveRight 2s infinite', // Animation name, duration, and repetition
};
export default function BasicSelect() {
  const [selectedFrom, setSelectedFrom] = React.useState('');
  const [selectedTo, setSelectedTo] = useState('');

  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setSelectedFrom(event.target.value);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChangeTo = (event) => {
    setSelectedTo(event.target.value);
  };


  return (
    <><div>
      <style>
       {`
        @keyframes moveRight {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(50px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}
      </style>
    </div><>
    <div style={image_container}>
      <img src={BackgroundImage} style={{ width: '100%' }} />
    </div>
        <div style={containerStyle}>
          <h1 style={textStyle}>
            <span style={{ color: '#003366', fontSize: '35px' }}>Book your</span>
            <span style={{ color: '#FFA500', fontSize: '35px' }}> own ride
            </span>
          </h1>
        </div>
        <div style={{ width: '100%' }}>
    <Link to="/Ride">
    <Button variant="contained"
      style={ButtonStyle}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = 'purple';
        e.target.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.transform = 'scale(1)';
      }}>
      Check for Ride
    </Button>
  </Link>
</div>


        <Service style={{ marginTop: '0' }}/>
        

      </></>
  );
}