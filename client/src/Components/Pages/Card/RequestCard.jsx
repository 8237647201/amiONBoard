import { Box, Typography, styled } from "@mui/material";
import '../../../index.css'
const RequestBox = styled(Box)`
  border: 1px solid #000;
  padding: 20px;
  margin-top: 20px;
  width: 90%;
  text-align: center;
  background-color: #fff; /* White background for the request details box */
`;

const RequestCard = (props) => {
  return (
    <RequestBox>
      <Typography variant="h6" style={{ color: "#000" }}>
        Ride Request Details:
      </Typography>
      <Typography style={{ color: "#000" }}>From: {props.form.from}</Typography>
      <Typography style={{ color: "#000" }}>To: {props.form.to}</Typography>
      <Typography style={{ color: "#000" }}>
        Leaving Time: {props.form.leavingTime}
      </Typography>
    </RequestBox>
  );
};

export default RequestCard;
