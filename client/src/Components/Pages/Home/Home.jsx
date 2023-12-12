import * as React from "react";
import Button from "@mui/material/Button";
import Service from "../Service/Service";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import Img1 from "../../Image/stockimage.jpeg";
import Img2 from "../../Image/home1.jpg";
import Img3 from "../../Image/home2.jpg";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "start",
  margin: "20px 0 10px 0"
};

const BtnContainer = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  margin: "0 0 50px 0"
}

const ButtonStyle = {
  marginBottom: "0px",
  backgroundColor: "white",
  color: "#ff9000",
  height: "45px",
  width: "250px",
  transition: "background-color 0.3s, transform 0.3s", // Add transition for smooth animation
  transformOrigin: "center",
  hoverButtonStyle: "transform: 'scale(2.0)'",
};

const textStyle = {
  width: "50%",
  textAlign: "center",
  animation: "moveRight 3s infinite",
};
const image_container = {
  overflow: "hidden",
  width: "100%",
};

const slideImg = {
  height: "500px",
  width: "100%",
  objectFit: "cover",
}

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
          <Carousel fade interval={3000} controls={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={slideImg}
                src={Img1} alt="img1" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={slideImg}
                src={Img2} alt="img2" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={slideImg}
                src={Img3} alt="img3" />
            </Carousel.Item>
          </Carousel>
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
          <h2 style={{ fontSize: '30px', color: "#003366" }}>
            JOIN THE #DUORIDE COMMUNITY
          </h2>
        </div>
        <div style={BtnContainer}>
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

        <Service />
      </>
    </>
  );
}
