// // SignUP.jsx

// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   styled,
//   Typography,
// } from "@mui/material";
// import BackgroundImage from "../../Image/logo.png";
// import { signupUser } from "../../API/fetchApi.js";
// import { useNavigate } from "react-router-dom";
// import { UserData } from "./Login"; // Import UserData from Login.jsx
// import { setHeaders, getAccessToken } from "../../utils/common-function.js";
// import '../../../index.css';

// const Component = styled(Box)`
//   width: 400px;
//   margin: auto;
//   box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
// `;

// const Image = styled("img")({
//   width: 200,
//   display: "flex",
//   margin: "auto",
//   padding: "50px 0 0",
// });

// const Wrapper = styled(Box)`
//   padding: 25px 35px;
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   & > div,
//   & > button,
//   & > p {
//     margin-top: 20px;
//   }
// `;

// const SignUpButton = styled(Button)`
//   text-transformation: none;
//   background: #fff;
//   height: 40px;
//   border-radius: 2px;
//   color: blue;
//   box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
// `;

// const Text = styled(Typography)`
//   color: #878787;
//   font-size: 16px;
// `;

// const CustomError = styled(Typography)`
//   font-size: 10px;
//   color: #ff6161;
//   line-height: 0;
//   margin-top: 10px;
//   font-weight: 600;
// };

// const SignUP = () => {
//   const [signup, setSignUp] = useState(UserData);
//   const [error, setError] = useState("");
//   const Navigate = useNavigate();

//   const onInputChange = (e) => {
//     setSignUp({ ...signup, [e.target.name]: e.target.value });
//   };

//   const signUpUser = async () => {
//     let response = await signupUser(signup);

//     if (response) {
//       setError("");
//       setSignUp(UserData);
//       Navigate("/login"); // Redirect to the login page or wherever you want
//     } else {
//       setError("Something Went wrong! Please try later");
//     }
//   };

//   return (
//     <Component>
//       <Box>
//         <Image src={BackgroundImage} />
//         <Wrapper>
//           <TextField
//             variant="standard"
//             onChange={(e) => onInputChange(e)}
//             name="name"
//             label="Enter Name"
//           />
//           <TextField
//             variant="standard"
//             onChange={(e) => onInputChange(e)}
//             name="username"
//             label="Enter Username"
//           />
//           <TextField
//             variant="standard"
//             onChange={(e) => onInputChange(e)}
//             name="password"
//             label="Enter Password"
//           />

//           {error && <CustomError>{error}</CustomError>}

//           <SignUpButton onClick={() => signUpUser()}>SignUp</SignUpButton>
//           <Text style={{ textAlign: "center" }}> OR</Text>
//           <Button variant="contained" onClick={() => Navigate("/login")}>
//             Already have an Account
//           </Button>
//         </Wrapper>
//       </Box>
//     </Component>
//   );
// };

// export default SignUP;
