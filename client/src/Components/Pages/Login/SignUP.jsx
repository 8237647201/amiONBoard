import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  styled,
  Typography,
} from "@mui/material";
import BackgroundImage from "../../Image/logo.png";
import GoogleIcon from "@mui/icons-material/Google"; // Import Google icon
import '../../../index.css';
import {signupUser} from '../../API/fetchApi'
import { Navigate } from "react-router-dom";
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled("img")({
  width: 200,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex-direction: column;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const SignUpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  height: 40px;
  border-radius: 2px;
  color: blue;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const GoogleSignInButton = styled(Button)`
  text-transform: none;
  background: blue; // Blue background
  height: 40px;
  border-radius: 2px;
  color: white; // White text color
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
  display: flex; // To align icon and text horizontally
  align-items: center; // To vertically align icon and text
  justify-content: center; // To horizontally align icon and text
  gap: 5px; // Gap between icon and text
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 16px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const SignUP = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    mobile :"",
    // confirmPassword: "",
   
  });

 const navigator = Navigate;

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async() => {
    const val = document.getElementsByName("confirmPassword")
    const confirmPassword = val.value
    console.log(confirmPassword)
    // Validate the form fields here
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.username ||
      !formData.password ||
       confirmPassword ||
      !formData.mobile
    ) {
      setError("Please fill in all the fields");
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }

    // Handle form submission logic here
    // Send the formData to your API or perform necessary actions
    const response  =await signupUser(formData)
    if(response){
       navigator('/login')
    }

  };

  return (
    <Component>
      <Box>
        <Image src={BackgroundImage} />
        <Wrapper>
          <TextField
            variant="standard"
            name="fullName"
            label="Your Full Name"
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            name="email"
            label="Your Email"
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            name="username"
            label="Create Username"
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            name="password"
            label="Create Password"
            type="password"
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            onChange={handleInputChange}
          />
          <TextField
            variant="standard"
            name="mobile"
            label="Your Mobile No."
            onChange={handleInputChange}
            value={formData.mobile} 
          />

          {error && <Error>{error}</Error>}

          <SignUpButton onClick={handleSubmit}>Submit</SignUpButton>
          <Text style={{ textAlign: "center" }}> OR</Text>
          <GoogleSignInButton>
            <GoogleIcon /> Sign in with Google
          </GoogleSignInButton>
        </Wrapper>
      </Box>
    </Component>
  );
};

export default SignUP;
