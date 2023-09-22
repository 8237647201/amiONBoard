import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(AppBar)`
  background: transparent;
  color: #000;
  box-shadow: none;
`;

const Container = styled(Toolbar)`
  justify-content: center;

  & > a {
    padding: 20px;
    text-decoration: none;
    color: grey; 
    font-weight: bold; 
    cursor: pointer;
    font-size: 25px;
  }
`;

const Header = () => {
  return (
    <Component>
      <Container>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </Container>
    </Component>
  );
};

export default Header;
