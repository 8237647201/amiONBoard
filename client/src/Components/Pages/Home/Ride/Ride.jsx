import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Typography,
  styled,
  Button,
  TextField,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import RequestCard from "../../Card/RequestCard.jsx";
import { DataContext } from "../../../DataProvider/Dataprovider.jsx";
import {
  creatBooking,
  getActiveBooking,
  getUserBooking,
  getAccepter,
} from "../../../API/fetchApi.js";

//css handling
const Container = styled(Box)({
  backgroundColor: "#f0f0f0",
});

const Sidebar = styled(Box)({
  flex: 1,
  padding: "20px",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "column",
  paddingTop: "60px",
});

const Content = styled(Box)({
  flex: 2,
  padding: "20px",
  backgroundColor: "#ffffff",
  overflowY: "auto",
  paddingTop: "60px",
});

const ButtonStyle = {
  backgroundColor: "#ff9000",
  color: "#ffffff",
  marginTop: "20px",
  height: "40px",
};

const InputLabel = styled(Typography)({});

//basic template

const BookingData = {
  username: "",
  from: "",
  to: "",
  leaveTime: "",
  status: "",
  isRider: false,
  isStudent: false,
  AccepterUsername: "",
  AccepterMobile: "",
  UserMobile: "",
  Fair: "",
};

const Ride = () => {
  //declaring all the variable
  const [inputValue, setInputValue] = useState(BookingData);
  const { account } = useContext(DataContext);
  const [activeBooking, setActiveBooking] = useState([BookingData]);
  const [newRequest, setNewRequest] = useState(null); // State to store the new request

  const [toggel, setToggel] = useState(false);

  //set all the default value

  useEffect(() => {
    setInputValue({
      ...inputValue,
      username: account.username,
      status: 1,
      isRider: account.isRider,
      isStudent: account.isStudent,
    });
  }, [account.username]);

  //getting all the Active booking

  useEffect(() => {
    const getAllActiveBooking = async () => {
      const res = await getActiveBooking(account.username);
      if (res) {
        setActiveBooking(res.data);
      }
    };
    getAllActiveBooking();
  }, [account.username, toggel]);

  // getting the userBooking if any
  useEffect(() => {
    if (newRequest == null) {
      const getTheUserBooking = async () => {
        try {
          const res = await getUserBooking(account.username);
          if (res && res.data) {
            console.log(res.data);
            setNewRequest(res.data);
          }
        } catch (error) {
          console.error("Error fetching user booking:", error);
        }
      };
      getTheUserBooking();
    }
  }, [account.username, newRequest, toggel]);

  //checking the user accepted request

  useEffect(() => {
    const Accepted = async () => {
      const res = await getAccepter(account.username);
      if (res) {
        setNewRequest(res.data);
      }
    };

    Accepted();
  }, [account.username, toggel]);

  useEffect(() => {
    const fetchActiveBookings = async () => {
      try {
        const res = await getActiveBooking(account.username);
        if (res) {
          setActiveBooking(res.data);
        } else {
          setActiveBooking([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch initially when the component mounts
    fetchActiveBookings();

    // Set up an interval to fetch active bookings every 3 minutes (180,000 milliseconds)
    const intervalId = setInterval(fetchActiveBookings, 180000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [account.username]);

  // taking input from user

  const handleChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  // Submiting the new Request
  console.log(newRequest);
  const handleSubmit = async () => {
    if (newRequest) {
      window.alert("Already Have an active request");
    } else {
      const res = await creatBooking(inputValue);

      // check if user have already an active booking
      if (res.data.booking) {
        window.alert("Already Have an active request");
      } else {
        setNewRequest(res.res);

        setToggel((prevState) => !prevState);
      }
    }
  };


  return (
    <Container className="d-flex flex-md-row flex-col justify-between">
      <Sidebar>
        <Typography variant="h4" text="bold" gutterBottom>
          Create Your Request Here!
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="from-select-label">From</InputLabel>
          <Select
            labelId="from-select-label"
            id="from-select"
            value={inputValue.from}
            name="from"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Amity"}>Amity</MenuItem>
            <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>
            <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
            <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="to-select-label">To</InputLabel>
          <Select
            labelId="to-select-label"
            id="to-select"
            value={inputValue.to}
            name="to"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value={"Amity"}>Amity</MenuItem>
            <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>
            <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
            <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Time : 00.00 PM/AM"
          variant="standard"
          name="leaveTime"
          style={{ marginTop: "20px" }}
          onChange={(e) => handleChange(e)}
        />
        <Button variant="contained" style={ButtonStyle} onClick={handleSubmit}>
          Request
        </Button>
        {newRequest &&
          // Render RequestCard based on the status
          (newRequest.status === 1 ? (
            <RequestCard
              form={newRequest}
              viewMode="detailed"
              setToggel={setToggel}
              setNewRequest={setNewRequest}
            />
          ) : (
            newRequest.status === 2 && (
              <RequestCard
                form={newRequest}
                viewMode="accepted"
                setToggel={setToggel}
                setNewRequest={setNewRequest}
              />
            )
          ))}
      </Sidebar>
      <Content>
        <Typography variant="h5" color="#7a3517" gutterBottom>
          Find Your Perfect Ride Here!
        </Typography>
        <Typography variant="h6" color="black" text="bold" gutterBottom>
          Pending Requests
        </Typography>

        {activeBooking.map((item, index) => (
          <RequestCard
            key={index}
            form={item}
            viewMode="compact"
            setToggel={setToggel}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Ride;
