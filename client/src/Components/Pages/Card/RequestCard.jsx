// import { Box, Typography, styled } from "@mui/material";
// import "../../../index.css";
// const RequestBox = styled(Box)`
//   border: 1px solid #000;
//   padding: 20px;
//   margin-top: 20px;
//   width: 90%;
//   text-align: center;
//   background-color: #fff; /* White background for the request details box */
// `;

// const RequestCard = (props) => {
//   const { form } = props;

//   return (
//     <RequestBox>
//       <Typography variant="h6" style={{ color: "#000" }}>
//         Ride Request Details:
//       </Typography>
//       <Typography style={{ color: "#000" }}>From: {form.from}</Typography>
//       <Typography style={{ color: "#000" }}>To: {form.to}</Typography>
//       <Typography style={{ color: "#000" }}>
//         Leaving Time: {form.leaveTime}
//       </Typography>
//       <Typography style={{ color: "#000" }}>
//         CreatedBY: {form.username}
//       </Typography>
//       <Typography style={{ color: "#000" }}>
//         Status: {form.status}
//       </Typography>
//     </RequestBox>
//   );
// };




// export default RequestCard;
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  styled,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const RequestBox = styled(Box)`
  border: 1px solid #000;
  padding: 20px;
  margin-top: 20px;
  width: 90%;
  text-align: center;
  background-color: #fff; 
`;

const RequestCard = ({ form, onDelete, viewMode }) => {
  if (viewMode === "compact") {
    return (
      <Card style={{ marginBottom: "10px" }}>
        <CardContent>
          <Typography variant="body1" style={{ display: "inline-block" }}>
            {form.from} --To--  {form.to}
          </Typography>
          <IconButton
            aria-label="delete"
            style={{ float: "right" }}
            onClick={() => onDelete(form.id)} // You should pass a unique identifier like form.id for each booking
          >
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
    );
  } else if (viewMode === "detailed") {
    return (
      <RequestBox>
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
        <Typography style={{ color: "#000" }}>Status: {form.status}</Typography>
      </RequestBox>
    );
  }
};

export default RequestCard;
