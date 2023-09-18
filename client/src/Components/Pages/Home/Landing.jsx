import React, { useState } from "react";
import { TextField, Button, Box, styled, Typography } from "@mui/material";
import RequestCard from "../Card/RequestCard.jsx";
import '../../../index.css'
const Container = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
  background-color: #f0f0f0; /* Light gray background */
`;

const InnerBox = styled(Box)`
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -400px;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fff; /* White background for the form box */
`;

const To = styled(TextField)`
  margin-top: 10px;
  width: 40%;
  margin-right: 10px;
  margin-left: 10px;
  input {
    color: "#000";
    background-color: "#f0f0f0"; /* Light gray background */
  }
`;

const From = styled(TextField)`
  margin-top: 10px;
  width: 40%;
  margin-right: 10px;
  margin-left: 10px;
  input {
    color: "#000";
    background-color: "#f0f0f0"; /* Light gray background */
  }
`;

const LeavingTime = styled(TextField)`
  margin-top: 10px;
  width: 40%;
  margin-right: 10px;
  margin-left: 10px;
  input {
    color: "#000";
    background-color: "#f0f0f0"; /* Light gray background */
  }
`;
const InitialForm = {
  from: "",
  to: "",
  leavingTime: "",
};
const Amiboard = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [leavingTime, setLeavingTime] = useState("");
  const [Form, setForm2] = useState(InitialForm);
  const [showRequest, setShowRequest] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  const handleRequest = () => {
    // Check for missing fields
    const missing = [];
    if (!from.trim()) missing.push("Starting Point");
    if (!to.trim()) missing.push("Destination");
    if (!leavingTime.trim()) missing.push("Leaving Time");

    if (missing.length > 0) {
      // If any fields are missing, set the missingFields state
      setMissingFields(missing);
      return;
    }

    // Implement your ride request logic here
    setForm2({
      to: to,
      from: from,
      leavingTime: leavingTime,
    });
    // For demonstration purposes, we'll just show the request details
    setShowRequest(true);

    // Clear the missing fields when the request is successful
    setMissingFields([]);
  };

  return (
    <Container>
      <InnerBox>
        <To
          id="standard-basic"
          label="Starting Point"
          variant="standard"
          onChange={(e) => setFrom(e.target.value)}
          name="from"
        />
        <From
          id="standard-basic"
          label="Destination"
          variant="standard"
          onChange={(e) => setTo(e.target.value)}
          name="to"
        />
        <LeavingTime
          id="standard-basic"
          label="Leaving Time"
          variant="standard"
          onChange={(e) => setLeavingTime(e.target.value)}
          name="leavingTime"
        />
        <Button
          onClick={handleRequest}
          variant="outlined"
          style={{ color: "#000", borderColor: "#000", marginTop: "10px" }}
        >
          Request Ride
        </Button>
      </InnerBox>
      {missingFields.length > 0 && (
        <Typography variant="body1" style={{ color: "red", marginTop: "10px" }}>
          Please fill in the following fields: {missingFields.join(", ")}
        </Typography>
      )}
      {showRequest && <RequestCard form={Form} />}
    </Container>
  );
};

export default Amiboard;
