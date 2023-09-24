import * as React from "react";
import { useState, useEffect } from "react";

import { Box, Button, FormControl, TextField } from "@mui/material";

import UserIMage from "../../Image/UserProfile.jpeg";
import { updateUser, uploadImage, CreateRider } from "../../API/fetchApi";
import AddIcon from "@mui/icons-material/Add";
import ImageIcon from "@mui/icons-material/Image";
import { useNavigate } from "react-router-dom";
const Container = {
  width: "100%",
  minHeight: "100vh",
  dispaly: "flex",
  justifyContent: "center",
};

const Box1 = {
  display: "flex",
  width: "100%",
  marginTop: "100px",

  justifyContent: "center",
};

const Box3 = {
  maxWidth: "10%",
  flex: 1,

  marginLeft: "50px",
  borderRadius: "100%",
};

const Box4 = {
  dispaly: "flex",
  flexDirection: "column",
  marginLeft: "100px",
  maxWidth: "50%",

  flex: 1,
};

const Box5 = {
  dispaly: "flex",
  flexDirection: "column",
  width: "50%",
  marginLeft: "35%",
};

const Box6 = {};

const StudentInput = {
  fullName: "",
  username: "",
  picture: "",
  email: "",
  EnrollNO: "",
  mobile: "",
  isProfileCompleted: false,
  isStudent: false,
};

const RiderDAta = {
  username: "",
  email: "",
  BikeNO: "",
  DLimage: "",
  profilePicture: "",
  mobile: "",
};

const CreateProfile = ({ user }) => {
  console.log(user);
  const [data, setData] = useState(user);

  const [userType, setUserType] = useState("student"); // Default to "student"
  const [showBikeNoInput, setShowBikeNoInput] = useState(false);
  const [usernameLabel, setUsernameLabel] = useState("Username");
  const [rider, setRider] = useState(RiderDAta);
  const [file, setFile] = useState("");
  const [file1, setFile1] = useState("");
  const Navigator = useNavigate();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data1 = new FormData();
        data1.append("name", file.name);
        data1.append("file", file);

        //API calling

        const response = await uploadImage(data1);

        setData({ ...data, profilePicture: response.data });
        setRider({ ...rider, profilePicture: response.data });
      }
    };
    getImage();
  }, [file]);

  useEffect(() => {
    const getImage = async () => {
      if (file1) {
        const data1 = new FormData();
        data1.append("name", file1.name);
        data1.append("file", file1);

        //API calling

        const response = await uploadImage(data1);

        setRider({ ...rider, DLimage: response.data });
      }
    };
    getImage();
  }, [file1]);

  useEffect(() => {
    setData(user);
  }, [user]);

  useEffect(() => {
    if (userType === "rider") {
      // Create a new rider object based on user data
      const updatedRider = {
        ...rider,
        username: user.username.concat("-rider"),
        mobile: user.mobile,
        email: user.email,
      };
      setRider(updatedRider);
    }
  }, [userType]);

  const handelInputChanged = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handelRiderInputChanged = (e) => {
    setRider({ ...rider, [e.target.name]: e.target.value });
  };
  const handleUserTypeChange = (e) => {
    const value = e.target.value;
    setUserType(value);

    // Update the visibility of the last input field and the label
    setShowBikeNoInput(value === "rider");
    setUsernameLabel(value === "rider" ? "Username-Rider" : "Username");
  };

  const handelImage = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handelImage1 = (e) => {
    console.log(e.target.files[0]);
    setFile1(e.target.files[0]);
  };

  const submitForm = async () => {
    if (userType === "student") {
      if (
        data.fullName &&
        data.username &&
        data.email &&
        data.mobile &&
        data.EnrollNO
      ) {
        setData({ ...data, isStudent: true, isProfileCompleted: true });
      }
      const updatedData = {
        ...data,
        isRider: false,
        isProfileCompleted: true,
        username: data.username,
        mobile: data.mobile,
        fullName: data.fullName,
        profilePicture: data.profilePicture,
        EnrollNO: data.EnrollNO,
        isStudent:true
      };
  
  
    
      const res = await updateUser(user._id, updatedData);
      if(res){
      Navigator('/')
      }
    } else if (userType === "rider") {
      if (
        rider.BikeNO &&
        rider.DLimage &&
        rider.profilePicture &&
        rider.email &&
        rider.mobile &&
        rider.username
      ) {
        
      }
      
      const updatedData = {
        ...data,
        isRider: true,
        isProfileCompleted: true,
        username: rider.username,
        mobile: rider.mobile,
        fullName: data.fullName,
        profilePicture: rider.profilePicture,
      };
  
      const res = await updateUser(user._id, updatedData);
    
      const response = await CreateRider(rider);
      if(response){
        Navigator('/')
        }
    }
  };

  const url = data.profilePicture ? data.profilePicture : UserIMage;
  const url2 = rider.DLimage ? rider.DLimage : ImageIcon;
  return (
    <Box style={Container}>
      <Box style={Box1}>
        <FormControl style={{ display: "flex", flexDirection: "row" }}>
          <Box style={Box3}>
            <label htmlFor="userImage" className="image-upload">
              <img
                src={url}
                style={{ maxHeight: "150px", maxWidth: "150px" }}
              />
            </label>
            <input
              type="file"
              className="image-upload"
              id="userImage"
              style={{ display: "none", visibility: "none" }}
              onChange={handelImage}
            />
          </Box>
          <Box style={Box4}>
            <TextField
              id="standard-basic"
              label="FullNAme"
              variant="standard"
              fullWidth="true"
              name="fullName"
              value={data.fullName}
              onChange={(e) => handelInputChanged(e)}
            />
            <TextField
              id="standard-basic"
              label="UserName"
              variant="standard"
              fullWidth="true"
              name="username"
              value={!showBikeNoInput ? data.username : rider.username}
              onChange={
                !showBikeNoInput ? (e) => handelInputChanged(e) : undefined
              }
            />
          </Box>
        </FormControl>
      </Box>

      <Box style={Box5}>
        <label style={{ marginRight: "50px" }}>
          <input
            type="radio"
            name="userType"
            value="student"
            checked={userType === "student"}
            onChange={handleUserTypeChange}
          />{" "}
          Student
        </label>
        <label>
          <input
            type="radio"
            name="userType"
            value="rider"
            checked={userType === "rider"}
            onChange={handleUserTypeChange}
          />{" "}
          Rider
        </label>
      </Box>

      <Box style={Box5}>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          fullWidth="true"
          name="email"
          value={!showBikeNoInput ? data.email : rider.email}
          onChange={
            !showBikeNoInput
              ? (e) => handelInputChanged(e)
              : (e) => handelRiderInputChanged(e)
          }
        />
        <TextField
          id="standard-basic"
          label="Mobile"
          variant="standard"
          fullWidth="true"
          name="mobile"
          value={!showBikeNoInput ? data.mobile : rider.mobile}
          onChange={
            !showBikeNoInput
              ? (e) => handelInputChanged(e)
              : (e) => handelRiderInputChanged(e)
          }
        />
        {!showBikeNoInput && (
          <TextField
            id="standard-basic"
            label="EnrollmentNumber"
            variant="standard"
            fullWidth="true"
            name="EnrollNO"
            value={!showBikeNoInput ? data.EnrollNO : ""}
            onChange={
              !showBikeNoInput ? (e) => handelInputChanged(e) : undefined
            }
          />
        )}
      </Box>
      {showBikeNoInput && (
        <Box style={Box5}>
          <TextField
            id="standard-basic"
            label="BikeNo"
            variant="standard"
            fullWidth
            name="BikeNO"
            value={rider.BikeNO}
            onChange={(e) => handelRiderInputChanged(e)}
          />
          <Box>
            <label htmlFor="bikeImage" className="image-upload">
              <AddIcon />
            </label>
            <input
              type="file"
              className="image-upload"
              id="bikeImage"
              onChange={handelImage1}
              style={{ display: "none", visibility: "none" }}
            />
            <img src={url2} style={{ maxWidth: "100px", maxHeight: "100px" }} />
          </Box>
        </Box>
      )}
      <Button
        style={{ marginLeft: "50%", marginTop: "50px" }}
        onClick={submitForm}
      >
        Save
      </Button>
    </Box>
  );
};

export default CreateProfile;
