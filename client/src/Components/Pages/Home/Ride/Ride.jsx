import React, { useState } from "react";
import {
  Box,
  TextareaAutosize,
  styled,
  Button,
  Typography,
  TextField
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import RequestCard from "../../Card/RequestCard.jsx";

const Container = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  height: "100vh",
  backgroundColor: "#f0f0f0",
});

const Sidebar = styled(Box)({
  flex: 1,
  padding: "20px",
  backgroundColor: "#ffffff",
  display :'flex',
  flexDirection :'column',
  paddingTop : "60px"
});

const Content = styled(Box)({
  flex: 2,
  padding: "20px",
  backgroundColor: "#ffffff",
  overflowY: "auto",
  paddingTop : "60px"
});

const ButtonStyle = {
  backgroundColor: "#ff9000",
  color: "#ffffff",
  marginTop: "20px",
  height: "40px",
};


const InputLabel = styled(Typography)({
      
})

const Ride = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [time, setTime] = useState("");
  const [inputValue, setInputValue] = useState({
    username: "",
    to: "",
    from: "",
    time: "",
  });

  const handleChange = (event) => {
    setFrom(event.target.value);
  };

  const handleSecondChange = (event) => {
    setTo(event.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue({
      username: "",
      to: to,
      from: from,
      time: time,
    });
  };

  return (
    <Container>
      <Sidebar>
        <Typography variant="h5" gutterBottom>
          Ride Request Form
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="from-select-label">From</InputLabel>
          <Select
            labelId="from-select-label"
            id="from-select"
            value={from}
            onChange={handleChange}
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
            value={to}
            onChange={handleSecondChange}
          >
            <MenuItem value={"Amity"}>Amity</MenuItem>
            <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>
            <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
            <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
          </Select>
        </FormControl>
        <TextField id="standard-basic" label="Time : HH/MM PM/AM" variant="standard" style={{marginTop:"20px"}} />
        <Button variant="contained" style={ButtonStyle} onClick={handleSubmit}>
          Request
        </Button>
      </Sidebar>
      <Content>
        <Typography variant="h5" gutterBottom>
          Ride Requests
        </Typography>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <RequestCard key={item} form={inputValue} />
        ))}
      </Content>
    </Container>
  );
};

// export default Ride;

//   );
// };

export default Ride;
