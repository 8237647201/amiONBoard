import React, { useState } from "react";
import {
  TextField,
  Button,
  styled,
  Typography,
} from "@mui/material";

const containerStyle = {
  backgroundColor: "white",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
};

const formStyle = {
  width: "400px",
  backgroundColor: "#fff",
  boxShadow: "5px 2px 5px 2px rgb(0 0 0/ 0.6)",
  borderRadius: "5px",
  padding: "20px",
};

const inputStyle = {
  marginTop: "10px",
};

const buttonStyle = {
  marginTop: "20px",
  backgroundColor: "#ff9000",
  color: "white",
};

const headingStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "black",
  marginBottom: "20px",
};

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    username: "",
    picture: null,
    email: "",
    enrollNo: "",
    mobileNo: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePictureChange = (e) => {
    // Handle picture upload here
    const file = e.target.files[0];
    setFormData({
      ...formData,
      picture: file,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    // Send formData to your API or perform necessary actions
    console.log(formData);
  };

  return (
    <div style={containerStyle}>
      <div style={{ marginRight: "20px" }}>
        {/* Image icon and upload button */}
        <img
          src="/path/to/your/icon.png"
          alt="Image Icon"
          style={{ width: "100px", height: "100px" }}
        />
        <label htmlFor="picture" style={{ marginTop: "10px" }}>
          Upload Picture
        </label>
        <input
          type="file"
          id="picture"
          name="picture"
          accept="image/*"
          onChange={handlePictureChange}
          required
        />
      </div>
      <form style={formStyle}>
        <Typography style={headingStyle}>Student Registration</Typography>
        <TextField
          style={inputStyle}
          variant="outlined"
          fullWidth
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
        <TextField
          style={inputStyle}
          variant="outlined"
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <TextField
          style={inputStyle}
          variant="outlined"
          fullWidth
          label="Enroll No"
          name="enrollNo"
          value={formData.enrollNo}
          onChange={handleInputChange}
          required
        />
        <TextField
          style={inputStyle}
          variant="outlined"
          fullWidth
          label="Mobile No"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleInputChange}
          required
        />
        <Button
          style={buttonStyle}
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Complete Registration
        </Button>
      </form>
    </div>
  );
};

export default StudentRegistration;
