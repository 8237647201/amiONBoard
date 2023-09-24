import React, { useContext, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { deletUserBooking, updateBooking } from "../../API/fetchApi.js";
import { DataContext } from "../../DataProvider/Dataprovider.jsx";

import { useNavigate } from "react-router-dom";

const RequestBox = styled(Box)`
  border: 1px solid #000;
  padding: 20px;
  margin-top: 20px;
  width: 90%;
  text-align: center;
  background-color: #fff;
`;

const RequestCard = ({ form, viewMode, setToggel, setNewRequest }) => {
  const Navigator = useNavigate();
  //deleting the request
  const { account } = useContext(DataContext);
  const [userEngaged, setuserEngaged] = useState(false);
  const onDelete = async (username) => {
    const res = await deletUserBooking(username);

    if (res) {
      setToggel((prevState) => !prevState);
      setNewRequest(null);
      setuserEngaged(false);
    }
  };
  const onAccept = async () => {
    const onAccept = {
      AccepterUsername: account.username,
      from: form.from,
      to: form.to,
      status: 2,
      username: form.username,
    };

    const response = await updateBooking(form._id, onAccept);
  };

  if (viewMode === "compact") {
    return (
      <Card style={{ marginBottom: "10px" }}>
        <CardContent>
          <Typography variant="body1" style={{ display: "inline-block" }}>
            {form.from} --To-- {form.to} -- Created By -- {form.username} ---
            Leaving TIme---- {form.leaveTime}
          </Typography>

          <IconButton
            aria-label="delete"
            style={{ float: "right" }}
            onClick={() => onAccept(form.id)} // You should pass a unique identifier like form.id for each booking
          >
            <DoneIcon />
          </IconButton>
        </CardContent>
      </Card>
    );
  } else if (viewMode === "detailed") {
    return (
      <RequestBox>
        <IconButton
          aria-label="delete"
          style={{ float: "right" }}
          onClick={() => onDelete(form.username)} // You should pass a unique identifier like form.id for each booking
        >
          <DeleteIcon />
        </IconButton>
        <Typography variant="h6" style={{ color: "#000" }}>
          Ride Request Details:
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
          Status: {form.status === 1 ? "Active" : form.status}
        </Typography>
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
          Your Ride Details
        </Typography>
        <Typography style={{ color: "#000" }}>From: {form.from}</Typography>
        <Typography style={{ color: "#000" }}>To: {form.to}</Typography>
        <Typography style={{ color: "#000" }}>
          Leaving Time: {form.leaveTime}
        </Typography>
        <Typography style={{ color: "#000" }}>
          CreatedBY: {form.username} --- {form.UserMobile}
        </Typography>
        <Typography style={{ color: "#000" }}>
          Status: {form.status === 2 ? "Accepted" : form.status}
        </Typography>
        <Typography style={{ color: "#000" }}>
          Accepted By: {form.AccepterUsername} ---- {form.AccepterMobile}
        </Typography>
      </RequestBox>
    );
  }
};

export default RequestCard;
