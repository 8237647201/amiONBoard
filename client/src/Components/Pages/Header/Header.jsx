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
    color: #EA1179; 
    font-weight: bold; 
    cursor: pointer;
    font-size: 25px;
  }
`;

const Header = () => {

  const Navigator = useNavigate()

  const handelLogout  =async()=>{
    window.localStorage.clear()
    window.sessionStorage.clear()
    window.location.reload()
    Navigator('/')
  }

  return (

    <Component>
      <Container>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <Link to="/profile">Profile</Link>
        <Button onClick={handelLogout}style={{ fontWeight: 'bold',fontSize: '18px',textDecoration: 'underline', }}>LogOut</Button>
        
      </Container>
    </Component>
  );
};

export default Header;
