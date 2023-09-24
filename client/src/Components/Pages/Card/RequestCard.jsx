import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Box,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { deletUserBooking } from "../../API/fetchApi.js";
import Ride from "../Home/Ride/Ride.jsx";
import { useNavigate } from "react-router-dom";

const RequestBox = styled(Box)`
  border: 1px solid #000;
  padding: 20px;
  margin-top: 20px;
  width: 90%;
  text-align: center;
  background-color: #fff;
`;

const RequestCard = ({ form, viewMode, setToggel,setNewRequest }) => {
  const Navigator = useNavigate();
  //deleting the request

  const onDelete = async (username) => {
    const res = await deletUserBooking(username);

    if (res) {
      setToggel((prevState) => !prevState);
      setNewRequest(null)
    }
  };
  const onAccept = () => {};

  if (viewMode === "compact") {
    return (
      <Card style={{ marginBottom: "10px" }}>
        <CardContent>
          <Typography variant="body1" style={{ display: "inline-block" }}>
            {form.from} --To-- {form.to} -- Created By -- {form.username}  --- Leaving TIme----   {form.leaveTime}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ float: "right" }}
            onClick={() => {}}
          >
            Book
          </Button>
        </CardContent>
      </Card>
    );
  } else if (viewMode === "detailed") {
    return (
      <RequestBox>
        <IconButton
          aria-label="delete"
          style={{ float: "right" }}
          onClick={() => onDelete(form.username)}
        >
          <DeleteIcon />
        </IconButton>
        <Typography variant="h6" style={{ color: "#000" }}>
          Your Request Details:
        </Typography>
        <Typography style={{ color: "#000" }}>From: {form.from}</Typography>
        <Typography style={{ color: "#000" }}>To: {form.to}</Typography>
        <Typography style={{ color: "#000" }}>
          Leaving Time: {form.leaveTime}
        </Typography>
        <Typography style={{ color: "#000" }}>
          Created BY: {form.username}
        </Typography>
        <Typography style={{ color: "#000" }}>
          Status: {form.status === 1 ? "Active" : form.status}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={() => {}}
        >
          Book
        </Button>
      </RequestBox>
    );
  } else if (viewMode === "accepted") {
    return (
      <RequestBox>
        {form.username === account.username ? (
          <IconButton
            aria-label="delete"
            style={{ float: "right" }}
            onClick={() => onDelete(form.username)} // You should pass a unique identifier like form.id for each booking
          >
            <DeleteIcon />
          </IconButton>
        ) : null}
        <Typography variant="h6" style={{ color: "#000" }}>
          Your Ride Detail
        </Typography>
        <Typography style={{ color: "#000" }}>From: {form.from}</Typography>
        <Typography style={{ color: "#000" }}>To: {form.to}</Typography>
        <Typography style={{ color: "#000" }}>
          Leaving Time: {form.leaveTime}
        </Typography>
        <Typography style={{ color: "#000" }}>
          CreatedBY: {form.username}
        </Typography>
        <Typography style={{ color: "#000" }}>
          Status: {form.status === 2 ? "Accepted" : form.status}
        </Typography>
        <Typography style={{ color: "#000" }}>
          Accepted By: {form.AccepterUsername}
        </Typography>
      </RequestBox>
    );
  }
};

export default RequestCard;

