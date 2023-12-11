// import React, { useState } from "react";
// import { Box, TextField, Button, styled, Typography } from "@mui/material";
// import BackgroundImage from "../../Image/logo.png";
// import GoogleIcon from "@mui/icons-material/Google"; // Import Google icon
// import "../../../index.css";
// import { signupUser } from "../../API/fetchApi";
// import { useNavigate } from "react-router-dom";
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
//   text-transform: none;
//   background: #fff;
//   height: 40px;
//   border-radius: 2px;
//   color: blue;
//   box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
// `;

// const GoogleSignInButton = styled(Button)`
//   text-transform: none;
//   background: blue; // Blue background
//   height: 40px;
//   border-radius: 2px;
//   color: white; // White text color
//   box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
//   display: flex; // To align icon and text horizontally
//   align-items: center; // To vertically align icon and text
//   justify-content: center; // To horizontally align icon and text
//   gap: 5px; // Gap between icon and text
// `;

// const Text = styled(Typography)`
//   color: #878787;
//   font-size: 16px;
// `;

// const Error = styled(Typography)`
//   font-size: 10px;
//   color: #ff6161;
//   line-height: 0;
//   margin-top: 10px;
//   font-weight: 600;
// `;

// const Data = {
//   fullName: "",
//   email: "",
//   username: "",
//   password: "",
//   mobile: "",
//   isRider: false,
//   isStudent: false,
//   isProfileCompleted: false,
//   profilePicture: "",
// };

// const SignUP = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     username: "",
//     password: "",
//     mobile: "",
//     confirmPassword: "",
//   });
//   const [data, setData] = useState(Data);

//   const navigator = useNavigate();

//   const [error, setError] = useState("");

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     // Validate the form fields here
//     if (
//       !formData.fullName ||
//       !formData.email ||
//       !formData.username ||
//       !formData.password ||
//       !formData.confirmPassword ||
//       !formData.mobile
//     ) {
//       setError("Please fill in all the fields");
//       return;
//     }

//     // Check if password and confirm password match
//     if (formData.password !== formData.confirmPassword) {
//       setError("Password and Confirm Password do not match");
//       return;
//     }
//     const updatedData = {
//       ...data,
//       fullName: formData.fullName,
//       username: formData.username,
//       email: formData.email,
//       password: formData.password,
//       mobile: formData.mobile,
//     };

//     // Update the state with the new data
//     setData(updatedData);
//     console.log(data);
//     // Handle form submission logic here
//     // Send the formData to your API or perform necessary actions
//     const response = await signupUser(data);
//     if (response) {
//       navigator("/login");
//     }
//   };

//   return (
//     <Component>
//       <Box>
//         <Image src={BackgroundImage} />
//         <Wrapper>
//           <TextField
//             variant="standard"
//             name="fullName"
//             label="Your Full Name"
//             onChange={(e) => handleInputChange(e)}
//           />
//           <TextField
//             variant="standard"
//             name="email"
//             label="Your Email"
//             onChange={(e) => handleInputChange(e)}
//           />
//           <TextField
//             variant="standard"
//             name="username"
//             label="Create Username"
//             onChange={(e) => handleInputChange(e)}
//           />
//           <TextField
//             variant="standard"
//             name="password"
//             label="Create Password"
//             type="password"
//             onChange={(e) => handleInputChange(e)}
//           />
//           <TextField
//             variant="standard"
//             name="confirmPassword"
//             label="Confirm Password"
//             type="password"
//             onChange={(e) => handleInputChange(e)}
//           />
//           <TextField
//             variant="standard"
//             name="mobile"
//             label="Your Mobile No."
//             onChange={(e) => handleInputChange(e)}
//             value={formData.mobile}
//           />

//           {error && <Error>{error}</Error>}

//           <SignUpButton onClick={handleSubmit}>Submit</SignUpButton>
//           <Text style={{ textAlign: "center" }}> OR</Text>
//           <GoogleSignInButton>
//             <GoogleIcon /> Sign in with Google
//           </GoogleSignInButton>
//         </Wrapper>
//       </Box>
//     </Component>
//   );
// };

// export default SignUP;
import React, { useState } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import BackgroundImage from "../../Image/logowithoutbg.png";
import GoogleIcon from "@mui/icons-material/Google"; // Import Google icon
import "../../../index.css";
import { signupUser } from "../../API/fetchApi";
import { useNavigate } from "react-router-dom";
import Bg1 from "../../Image/bluryou.jpg";
const Overlay = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image:url(${Bg1});
  backdrop-filter: blur(10px); 
  z-index: 1; /* Ensure the overlay is above other content */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Component = styled(Box)`
display:flex;
justify-content:center;
width: 500px;
`;

const Image = styled("img")({
  width: 200,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
padding: 20px 30px;
width:250px;
display: flex;
flex-direction: column;
flex: 1;
& > div,
& > button,
& > p {
  margin: 5px;
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

const Data = {
  fullName: "",
  email: "",
  username: "",
  password: "",
  mobile: "",
  isRider: false,
  isStudent: false,
  isProfileCompleted: false,
  profilePicture: "",
};

const SignUP = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    mobile: "",
    confirmPassword: "",
  });
  const [data, setData] = useState(Data);

  const navigator = useNavigate();

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Validate the form fields here
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.username ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.mobile
    ) {
      setError("Please fill in all the fields");
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm Password do not match");
      return;
    }
    const updatedData = {
      ...data,
      fullName: formData.fullName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
      mobile: formData.mobile,
    };

    // Update the state with the new data
    setData(updatedData);

    // Handle form submission logic here
    // Send the formData to your API or perform necessary actions
    const response = await signupUser(data);
    if (response) {
      navigator("/login");
    }
  };

  return (
    <Overlay>
      <Component style={{ background: 'rgba(0, 0, 0, 0.1)', borderWidth: "0px" }}>
        <Box>
          <Image src={BackgroundImage} style={{ width: '250px', height: '180px' }} />
          <Wrapper style={{ background: 'Radial-gradient(circle,#FFA500,#003366)', border: '0px', borderRadius: '20px', marginBottom: '55px' }}>
            <TextField
              variant="standard"
              name="fullName"
              label="Your Full Name"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              variant="standard"
              name="email"
              label="Your Email"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              variant="standard"
              name="username"
              label="Create Username"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              variant="standard"
              name="password"
              label="Create Password"
              type="password"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              variant="standard"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              onChange={(e) => handleInputChange(e)}
            />
            <TextField
              variant="standard"
              name="mobile"
              label="Your Mobile No."
              onChange={(e) => handleInputChange(e)}
              value={formData.mobile}
            />

            {error && <Error>{error}</Error>}

            <SignUpButton style={{ background: "#003366", color: '#FFA500' }} onClick={handleSubmit}>Submit</SignUpButton>
            <Text style={{ textAlign: "center" }}> OR</Text>
            <GoogleSignInButton style={{ background: "#003366", color: '#FFA500' }} onClick={() => { window.alert("!! it's Under Working") }}>
              <GoogleIcon /> Sign in with Google
            </GoogleSignInButton>
          </Wrapper>
        </Box>
      </Component>
    </Overlay>
  );
};

export default SignUP;