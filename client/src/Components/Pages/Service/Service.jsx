// import React from "react";
// import SavingsIcon from "@mui/icons-material/Savings";
// import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
// import PeopleIcon from "@mui/icons-material/People";

// const containerStyle = {
//   backgroundColor: "#f3cebf",
//   minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: "20px",
//   position: "relative", // Added
//   bottom: "600px", // Added
// };

// const iconStyle = {
//   fontSize: "50px",
//   color: "#ff9000",
//   alignItems: "center",
//   width: "80%",
// };

// const textStyle = {
//   textAlign: "center", // Center text within its container
// };

// const divstyle = {
//   width: "1000px",
//   color: "#0d264c",
//   display: "flex",
//   justifyContent: "space-between",
// };

// const Service = () => {
//   return (
//     <div style={containerStyle}>
//       <div style={{ position: "relative", bottom: "30px", right: "10px" }}>
//         <h1 style={textStyle}>
//           <span style={{ color: "black", fontSize: "50px" }}>What's in it</span>
//           <span style={{ color: "#ed530e", fontSize: "50px" }}> for you </span>
//         </h1>
//       </div>
//       <div style={divstyle}>
//         <div
//           style={{
//             width: "250px",
//             marginRight: "60px",
//             alignItems: "center",
//             marginLeft: "75px",
//           }}
//         >
//           <div>
//             {" "}
//             <SavingsIcon style={iconStyle} />
//           </div>
//           <h1>AFFORDABILITY</h1>
//           <p style={{ color: "black", fontSize: "20px" }}>
//             No more latent prices and shocked reactions after seeing the final
//             ride cost.
//             <br />
//             We are here with the most affordable rides for all.
//           </p>
//         </div>
//         <div
//           style={{ width: "300px", marginRight: "60px", marginLeft: "60px" }}
//         >
//           <div>
//             {" "}
//             <TwoWheelerIcon style={iconStyle} />
//           </div>

//           <h1>QUICK RIDE</h1>
//           <p style={{ color: "black", fontSize: "20px" }}>
//             Trend setters of smart commute be it traffic or rush hours.
//           </p>
//         </div>
//         <div
//           style={{ width: "300px", marginRight: "60px", marginLeft: "60px" }}
//         >
//           <div>
//             {" "}
//             <PeopleIcon style={iconStyle} />
//           </div>

//           <h1>MAKE FRIENDS</h1>
//           <p style={{ color: "black", fontSize: "20px" }}>
//             Get to know unique people from your university and opportunity to
//             socialize more and create useful contacts.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Service;
import React from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import PeopleIcon from "@mui/icons-material/People";
const containerStyle = {
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

};
const iconStyle = {
  fontSize: "50px",
  color: "#ff9000",
  alignItems: "center",
  width: "80%",
};

const textStyle = {
  textAlign: "center",
  fontSize: "35px"
};

const divstyle = {
  width: "100%",
  padding: "0 50px 0 50px",
  color: "#0d264c",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start"
};

const serviceDiv = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "200px"
}

const Service = () => {
  return (
    <div style={containerStyle}>
      <div style={{ margin: "0 0 50px 0" }}>
        <h1 style={textStyle}>
          <span style={{ color: '#003366' }}>
            What's in it{" "}
          </span>
          <span style={{ color: "#ff9000" }}> for you </span>
        </h1>
      </div>
      <div className="d-flex flex-md-row flex-col align-items-md-start align-items-center" style={divstyle}>
        <div style={serviceDiv}>
          <div>
            {" "}
            <SavingsIcon style={iconStyle} />
          </div>
          <h1 style={{ textAlign: 'center', fontSize: '25px' }}>AFFORDABILITY</h1>
          <p style={{ color: "black", fontSize: "18px" }}>
            No more latent prices and shocked reactions after seeing the final
            ride cost.
            <br />
            We are here with the most affordable rides for all.
          </p>
        </div>
        <div style={serviceDiv}>
          <div>
            {" "}
            <TwoWheelerIcon style={iconStyle} />
          </div>

          <h1 style={{ textAlign: 'center', fontSize: '25px' }}>QUICK RIDE</h1>
          <p style={{ color: "black", fontSize: "18px" }}>
            Trend setters of smart commute be it traffic or rush hours.
          </p>
        </div>
        <div style={serviceDiv}>
          <div>
            {" "}
            <PeopleIcon style={iconStyle} />
          </div>

          <h1 style={{ textAlign: 'center', fontSize: '25px' }}>MAKE FRIENDS</h1>
          <p style={{ color: "black", fontSize: "18px" }}>
            Get to know unique people from your university and oppurtunity to
            socialize more and create useful contacts
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;