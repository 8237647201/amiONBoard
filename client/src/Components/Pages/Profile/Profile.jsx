import React, { useState, useContext, useEffect } from "react";

import { Box, Button, Typography } from "@mui/material";
import { DataContext } from "../../DataProvider/Dataprovider.jsx";
import { getUser, getRider } from "../../API/fetchApi.js";
import CreateProfile from "./CreateProfile.jsx";
import Image from "../../Image/UserProfile.jpeg";

const Container = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Card = {
  minHeight: "70vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "50px",
  marginLeft: "50px",
  padding: "10px",
}

const Box1 = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "50%",
  margin: "20px",
  justifyContent: "center",
  alignItems: "center"
};

const Name = {
  fontSize: 40
}

const Box2 = {
  display: "flex",
  height: "100%",
  width: "100%",
  padding: "20px",
  justifyContent: "space-around",
  alignItems: "center",

}

const userDetails = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
}

const bikeImg = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "50%",
}

const Text = {
  display: "flex",
  flexDirection: "column",
  fontSize: 30,
};

const btn1 = {
  display: "flex",
  margin: "10px",
  padding: "10px",
  backgroundColor: "#ff9000",
  color: "#ffffff",
}

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
const RiderData = {
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
  const [rider, setRider] = useState(RiderData)

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
            setRider({ ...rider, ...res.data });
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchRiderData();
    }
  }, [user.isRider, account.username]);


  const handleUpdate = () => [
    setUser({ ...user, isProfileCompleted: false })
  ]

  var url = user.profilePicture || Image;
  var url2 = rider.DLimage || Image
  if (user && user.isProfileCompleted) {
    return (
      <Box style={Container}>
        <Box className="d-flex flex-md-row flex-col" style={Card}>
          <Box style={Box1}>
            <img
              src={url}
              style={{ maxHeight: "150px", maxWidth: "150px", borderRadius: "100%" }}
              alt="profile"
            />
            <Typography>@{user.username}</Typography>
            {user.isStudent &&
              <Typography>Student</Typography>
            }
            {user.isRider && <Typography>Rider</Typography>}
          </Box>

          <Box className="d-flex flex-md-row flex-col justify-between" style={Box2}>
            <Box style={userDetails}>
              <Typography style={Name}>{user.fullName} </Typography>
              <Box style={Text}>
                <Typography style={{ marginBottom: "5px" }}>
                  <span style={{ fontWeight: 600 }}>Email: </span>{user.email}
                </Typography>
                <Typography style={{ marginBottom: "5px" }}>
                  <span style={{ fontWeight: 600 }}>Mobile: </span>{user.mobile}
                </Typography>
                <Typography>
                  <span style={{ fontWeight: 600 }}>Enrollment: </span>{user.EnrollNO}
                </Typography>
              </Box>
            </Box>
            {user.isRider && (
              <Box style={bikeImg}>

                <Box style={Text}>
                  <img src={url2} style={{ maxHeight: "200px", maxWidth: "200px" }} alt="bike" />
                  <Typography>
                    <span style={{ fontWeight: 600 }}>Bike Number: </span>{rider.BikeNO}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        <Button style={btn1} onClick={handleUpdate} >Update Profile</Button>
      </Box>
    );
  } else {
    return <CreateProfile user={user} />;
  }
}

export default Profile;
