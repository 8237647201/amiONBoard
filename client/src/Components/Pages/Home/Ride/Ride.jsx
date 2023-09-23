// import React, { useState, useContext, useEffect } from "react";
// import {
//   Box,
//   TextareaAutosize,
//   styled,
//   Button,
//   Typography,
//   TextField,
// } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import RequestCard from "../../Card/RequestCard.jsx";
// import { DataContext } from "../../../DataProvider/Dataprovider.jsx";
// import { creatBooking, getActiveBooking } from "../../../API/fetchApi.js";

// const Container = styled(Box)({
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-between",
//   height: "100vh",
//   backgroundColor: "#f0f0f0",
// });

// const Sidebar = styled(Box)({
//   flex: 1,
//   padding: "20px",
//   backgroundColor: "#ffffff",
//   display: "flex",
//   flexDirection: "column",
//   paddingTop: "60px",
// });

// const Content = styled(Box)({
//   flex: 2,
//   padding: "20px",
//   backgroundColor: "#ffffff",
//   overflowY: "auto",
//   paddingTop: "60px",
// });

// const ButtonStyle = {
//   backgroundColor: "#ff9000",
//   color: "#ffffff",
//   marginTop: "20px",
//   height: "40px",
// };

// const InputLabel = styled(Typography)({});

// const BookingData = {
//   username: "",
//   from: "",
//   to: "",
//   leaveTime: "",
//   status: "",
// };

// const Ride = () => {
//   const [inputValue, setInputValue] = useState(BookingData);
//   const { account } = useContext(DataContext);
//   const [activeBooking, setActiveBooking] = useState([BookingData]);
//   useEffect(() => {
//     // Update the username property of inputValue with account.username
//     setInputValue({ ...inputValue, username: account.username, status: 1 });
//   }, [account.username]);

//   useEffect(() => {
//     const getAllActiveBooking = async () => {
//       const res = await getActiveBooking(account.username);
//       if (res) {
//         setActiveBooking(res.data);
//       }
//     };
//     getAllActiveBooking();
//   }, []);

//   const handleChange = (event) => {
//     setInputValue({ ...inputValue, [event.target.name]: event.target.value });
//   };
//   console.log(activeBooking);
//   const handleSubmit = async () => {
//     const res = await creatBooking(inputValue);
//     if (res.data.booking) {
//       window.alert("Already Have an active request");
//     }
//   };

//   return (
//     <Container>
//       <Sidebar>
//         <Typography variant="h5" gutterBottom>
//           Ride Request Form
//         </Typography>
//         <FormControl fullWidth>
//           <InputLabel id="from-select-label">From</InputLabel>
//           <Select
//             labelId="from-select-label"
//             id="from-select"
//             value={inputValue.from}
//             name="from"
//             onChange={(e) => handleChange(e)}
//           >
//             <MenuItem value={"Amity"}>Amity</MenuItem>
//             <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>
//             <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
//             <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl fullWidth>
//           <InputLabel id="to-select-label">To</InputLabel>
//           <Select
//             labelId="to-select-label"
//             id="to-select"
//             value={inputValue.to}
//             name="to"
//             onChange={(e) => handleChange(e)}
//           >
//             <MenuItem value={"Amity"}>Amity</MenuItem>
//             <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>
//             <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
//             <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           id="standard-basic"
//           label="Time : HH:MM PM/AM"
//           variant="standard"
//           name="leaveTime"
//           style={{ marginTop: "20px" }}
//           onChange={(e) => handleChange(e)}
//         />
//         <Button variant="contained" style={ButtonStyle} onClick={handleSubmit}>
//           Request
//         </Button>

//         <Box>Your Request</Box>
//       </Sidebar>
//       <Content>
//         <Typography variant="h5" gutterBottom>
//           Ride Requests
//         </Typography>
//         {activeBooking.map((item, index) => (
          
//           <RequestCard key={index} form={item} />
//         ))}
//       </Content>
//     </Container>
//   );
// };

// export default Ride;
// import React, { useState, useContext, useEffect } from "react";
// import {
//   Box,
//   TextareaAutosize,
//   styled,
//   Button,
//   Typography,
//   TextField,
// } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import RequestCard from "../../Card/RequestCard.jsx";
// import { DataContext } from "../../../DataProvider/Dataprovider.jsx";
// import { creatBooking, getActiveBooking } from "../../../API/fetchApi.js";

// const Container = styled(Box)({
//   display: "flex",
//   flexDirection: "row",
//   justifyContent: "space-between",
//   height: "100vh",
//   backgroundColor: "#f0f0f0",
// });

// const Sidebar = styled(Box)({
//   flex: 1,
//   padding: "20px",
//   backgroundColor: "#ffffff",
//   display: "flex",
//   flexDirection: "column",
//   paddingTop: "60px",
// });

// const Content = styled(Box)({
//   flex: 2,
//   padding: "20px",
//   backgroundColor: "#ffffff",
//   overflowY: "auto",
//   paddingTop: "60px",
// });

// const ButtonStyle = {
//   backgroundColor: "#ff9000",
//   color: "#ffffff",
//   marginTop: "20px",
//   height: "40px",
// };

// const InputLabel = styled(Typography)({});

// const BookingData = {
//   username: "",
//   from: "",
//   to: "",
//   leaveTime: "",
//   status: "",
// };

// const Ride = () => {
//   const [inputValue, setInputValue] = useState(BookingData);
//   const { account } = useContext(DataContext);
//   const [activeBooking, setActiveBooking] = useState([BookingData]);
//   const [newRequest, setNewRequest] = useState(null); // State to store the new request

//   useEffect(() => {
//     // Update the username property of inputValue with account.username
//     setInputValue({ ...inputValue, username: account.username, status: 1 });
//   }, [account.username]);

//   useEffect(() => {
//     const getAllActiveBooking = async () => {
//       const res = await getActiveBooking(account.username);
//       if (res) {
//         setActiveBooking(res.data);
//       }
//     };
//     getAllActiveBooking();
//   }, []);

//   const handleChange = (event) => {
//     setInputValue({ ...inputValue, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = async () => {
//     const res = await creatBooking(inputValue);
//     if (res.data.booking) {
//       setNewRequest(inputValue); // Set the new request data in the state
//       window.alert("Already Have an active request");
//     }
//   };

//   return (
//     <Container>
//       <Sidebar>
//         <Typography variant="h5" gutterBottom>
//           Ride Request Form
//         </Typography>
//         <FormControl fullWidth>
//           <InputLabel id="from-select-label">From</InputLabel>
//           <Select
//             labelId="from-select-label"
//             id="from-select"
//             value={inputValue.from}
//             name="from"
//             onChange={(e) => handleChange(e)}
//           >
//             <MenuItem value={"Amity"}>Amity</MenuItem>
//             <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>
//             <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
//             <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
//           </Select>
//         </FormControl>
//         <FormControl fullWidth>
//           <InputLabel id="to-select-label">To</InputLabel>
//           <Select
//             labelId="to-select-label"
//             id="to-select"
//             value={inputValue.to}
//             name="to"
//             onChange={(e) => handleChange(e)}
//           >
//             <MenuItem value={"Amity"}>Amity</MenuItem>
//             <MenuItem value={"Panvel Station"}>Panvel Station</MenuItem>
//             <MenuItem value={"India Bulls"}>India Bulls</MenuItem>
//             <MenuItem value={"Ajivali"}>Ajivali</MenuItem>
//           </Select>
//         </FormControl>
//         <TextField
//           id="standard-basic"
//           label="Time : HH:MM PM/AM"
//           variant="standard"
//           name="leaveTime"
//           style={{ marginTop: "20px" }}
//           onChange={(e) => handleChange(e)}
//         />
//         <Button variant="contained" style={ButtonStyle} onClick={handleSubmit}>
//           Request
//         </Button>

//         {newRequest && (
//           <RequestCard form={newRequest} /> 
//         )}
//       </Sidebar>
//       <Content>
//         <Typography variant="h5" gutterBottom>
//           Ride Requests
//         </Typography>
//         {activeBooking.map((item, index) => (
//           <RequestCard key={index} form={item} />
//         ))}
//       </Content>
//     </Container>
//   );
// };

// export default Ride;
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
import { creatBooking, getActiveBooking } from "../../../API/fetchApi.js";
import DeleteIcon from "@mui/icons-material/Delete";

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

const BookingData = {
  username: "",
  from: "",
  to: "",
  leaveTime: "",
  status: "",
};

const Ride = () => {
  const [inputValue, setInputValue] = useState(BookingData);
  const { account } = useContext(DataContext);
  const [activeBooking, setActiveBooking] = useState([BookingData]);
  const [newRequest, setNewRequest] = useState(null); // State to store the new request

  useEffect(() => {
    // Update the username property of inputValue with account.username
    setInputValue({ ...inputValue, username: account.username, status: 1 });
  }, [account.username]);

  useEffect(() => {
    const getAllActiveBooking = async () => {
      const res = await getActiveBooking(account.username);
      if (res) {
        setActiveBooking(res.data);
      }
    };
    getAllActiveBooking();
  }, []);

  const handleChange = (event) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const res = await creatBooking(inputValue);
    if (res.data.booking) {
      setNewRequest(inputValue); // Set the new request data in the state
      window.alert("Already Have an active request");
    }
  };

  const handleDelete = (id) => {
    // Implement your delete logic here
    // You can use this function to delete an active booking
  };

  return (
    <Container>
      <Sidebar>
        <Typography variant="h4" text='bold' gutterBottom>
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

        {newRequest && (
          <RequestCard
            form={newRequest}
            onDelete={() => setNewRequest(null)}
            viewMode="detailed"
          />
        )}
      </Sidebar>
      <Content>
        <Typography variant="h5" color='blue' gutterBottom>
          Find Your Perfect Ride Here!
        </Typography>
        <Typography variant="h6" color='black' text='bold' gutterBottom>
          Pending Requests
        </Typography>
        {activeBooking.map((item, index) => (
          <RequestCard
            key={index}
            form={item}
            onDelete={() => handleDelete(item.id)} // Pass the unique identifier for each booking
            viewMode="compact"
          />
        ))}
      </Content>
    </Container>
  );
};

export default Ride;
