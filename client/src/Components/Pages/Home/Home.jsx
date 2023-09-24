import * as React from "react";
import Button from "@mui/material/Button";
import BackgroundImage from "../../Image/stockimage.jpeg";
import { useState } from "react";
import Service from "../Service/Service";
import { Link } from "react-router-dom";

const iconStyle = {
  fontSize: "50px",
  color: "#ff9000",
  alignItems: "center",
  width: "80%",
};
const divstyle = {
  width: "1000px",
  color: "#0d264c",
  display: "flex",
  justifyContent: "space-between",
};
const containerStyle = {
  maxHeight: "8vh",
  display: "flex",
  flexDirection: "column",
  marginBottom: "0px",
  padding: "0px",
  alignItems: "top",
  justifyContent: "center",
};
const ButtonStyle = {
  marginBottom: "0px",
  backgroundColor: "white",
  color: "#ff9000",
  marginTop: "90px",
  marginLeft: "43%",
  height: "45px",
  width: "230px",
  transition: "background-color 0.3s, transform 0.3s", // Add transition for smooth animation
  transformOrigin: "center",
  hoverButtonStyle: "transform: 'scale(2.0)'",
};

const textStyle = {
  marginTop: "100px",
  marginBottom: "20px",
  textAlign: "center",
  animation: "moveRight 3s infinite",
};
const image_container = {
  height: "550px",
  overflow: "hidden",
  object_fit: "cover",
};
const animatedTextStyle = {
  color: "black",
  animation: "moveRight 2s infinite", // Animation name, duration, and repetition
};
export default function BasicSelect() {
  return (
    <>
      <div>
        <style>
          {`
        @keyframes moveRight {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(50px);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}
        </style>
      </div>
      <>
        <div style={image_container}>
          <img src={BackgroundImage} style={{ width: "100%" }} />
        </div>
        <div style={containerStyle}>
          <h1 style={textStyle}>
            <span style={{ color: "#003366", fontSize: "35px" }}>
              Book your
            </span>
            <span style={{ color: "#FFA500", fontSize: "35px" }}>
              {" "}
              own ride
            </span>
          </h1>
        </div>
        <div style={{ width: "100%" }}>
          <Link to="/Ride">
            <Button
              variant="contained"
              style={ButtonStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "purple";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.transform = "scale(1)";
              }}
            >
              Check for Ride
            </Button>
          </Link>
        </div>

        <Service style={{ marginTop: "0" }} />
      </>
    </>
  );
}
