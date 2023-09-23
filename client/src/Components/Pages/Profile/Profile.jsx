import React, { useState, useContext, useEffect } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";
import { DataContext } from "../../DataProvider/Dataprovider.jsx";
import { getUser, getRider } from "../../API/fetchApi.js";
import CreateProfile from "./CreateProfile.jsx";
import Image from "../../Image/UserProfile.jpeg";
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

const Data = {
  fullName: "",
  email: "",
  username: "",
  password: "",
  mobile: "",
  EnrollNO: "",
  profilePicture: "",
  isRider: false,
  isStudent: false,
  isProfileCompleted: false,
};
const RiderDAta = {
  username: "",
  email: "",
  BikeNO: "",
  DLimage: "",
  profilePicture: "",
  mobile: "",
};
function Profile() {
  const { account } = useContext(DataContext);
  const [user, setUser] = useState(Data);
  const [rider,setRider]  = useState(RiderDAta)

  useEffect(() => {
    const getuser = async () => {
      const res = await getUser(account.username);
      if (res) {
        setUser(res.data);
      }
    };
    getuser();
  }, [account.username]);
  
  useEffect(() => {
    if (user.isRider) {
      // Only fetch rider data if the user is a rider
      const fetchRiderData = async () => {
        try {
          const res = await getRider(account.username);
          if (res) {
            setRider({...rider,...res.data});
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchRiderData();
    }
  }, [user.isRider, account.username]);


  var url = user.profilePicture || Image;
  var url2 = rider.DLimage||Image
  if (user && user.isProfileCompleted) {
    return (
      <Box style={Container}>
        <Box style={Box1}>
          <Box style={Box3}>
            <label htmlFor="userImage" className="image-upload">
              <img
                src={url}
                style={{ maxHeight: "150px", maxWidth: "150px" }}
              />
            </label>
          </Box>
          <Box style={Box4}>
            <Typography> {user.fullName} </Typography>
            <Typography>{user.username}</Typography>
          </Box>
        </Box>

        <Box style={Box5}>
          {user.isStudent && (
            <Typography>You Registered as a Student</Typography>
          )}
          {user.isRider && <Typography>You Registered as a Rider</Typography>}
        </Box>

        <Box style={Box5}>
          <Typography>{user.email}</Typography>
          <Typography>{user.EnrollNO}</Typography>
          <Typography>{user.mobile}</Typography>
        </Box>
        {user.isRider && (
          <Box style={Box5}>
            <Typography>{rider.BikeNO}</Typography>
             <img src={url2} style={{maxHeight:"200px",maxWidth:"200px"}} />
          </Box>
        )}

        <Button style={{ marginLeft: "50%", marginTop: "50px" }}>Update</Button>
      </Box>
    );
  } else {
    return <CreateProfile user={user} />;
  }
}

export default Profile;
