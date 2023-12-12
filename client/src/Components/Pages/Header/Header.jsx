<<<<<<< HEAD
import { AppBar, Button, Toolbar, styled } from "@mui/material";
import { Link,useNavigate } from "react-router-dom";

const Component = styled(AppBar)`
  background: transparent;
  color: #000;
  box-shadow: none;
`;

const Container = styled(Toolbar)`
  justify-content: right;

  & > a {
    padding: 20px;
    text-decoration: none;
    color: #191D88; 
    font-weight: bold; 
    cursor: pointer;
    font-size: 25px;
  }
`;
=======
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../Image/location.png";
>>>>>>> f310609e11d4c6271575f5ade9f6d72efe78333c

const Header = () => {
  const Navigator = useNavigate()

  const handleLogout = async () => {
    window.localStorage.clear()
    window.sessionStorage.clear()
    window.location.reload()
    Navigator('/')
  }

  const Shadow = {
    boxShadow: "0px 1px 10px #d2d2d2"
  }

  const logoStyle = {
    height: "30px",
    objectFit: "cover",
    borderRadius: "100px"
  }

  const LinkStyle = {
    color: "#003366",
    fontSize: "24px",
    textDecoration: "none",
    margin: "10px",
  }

  const LogoutBtn = {
    color: "#ff9000",
    fontSize: "24px",
    textDecoration: "none",
    margin: "10px",
  }

  return (
    <Navbar style={Shadow} collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
          <Link style={LinkStyle} className="d-flex align-middle" to="/home">
            <img style={logoStyle} src={logoImg} alt="logo" />
            <span style={{ color: "black" }} className="ms-auto">AmiOnBoard</span>
          </Link>
        </Nav>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              onMouseEnter={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = "none"
              }}
              style={LinkStyle} to="/about">About</Link>
            <Link
              onMouseEnter={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = "none"
              }}
              style={LinkStyle} to="/profile">Profile</Link>
          </Nav>
          <Nav>
            <Link
              onMouseEnter={(e) => {
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.textDecoration = "none"
              }}
              style={LogoutBtn} onClick={handleLogout}>Log Out</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;