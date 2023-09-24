
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import BackgroundImage from "../../Image/logowithoutbg.png";
import Bg1 from "../../Image/bluryou.jpeg.jpg";
import { useState, useContext } from "react";
import { logginUser } from "../../API/fetchApi.js";
import { DataContext } from "../../DataProvider/Dataprovider.jsx";
import { useNavigate } from "react-router-dom";
import { setHeaders, getAccessToken } from "../../utils/common-function.js";
import "../../../index.css";

const Overlay = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${Bg1});
  backdrop-filter: blur(10px);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Component = styled(Box)`
  display: flex;
  justify-content: center;
  width: 500px;
`;

const Image = styled("img")({
  width: 200,
  display: "flex",
  margin: "auto",
  padding: "50px 0 0",
});

const Wrapper = styled(Box)`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  flex: 1;

  & > div,
  & > button,
  & > p {
    margin-top: 40px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #787373;
  height: 40px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const SignUpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  height: 40px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: white;
  font-size: 16px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const UserData = {
  name: "",
  username: "",
  password: "",
};

const loginInitialValue = {
  username: "",
  password: "",
};

const Login = ({ isUserAuthenticated }) => {

  const [login, setLogin] = useState(loginInitialValue);

    const [error, setError] = useState("");
  
    const { setAccount } = useContext(DataContext);
  
    const Navigate = useNavigate();
  
    const toggelState = () => {
      Navigate("/signup");
    };
  
    const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
    };



    const loginUser = async () => {
      let response = await logginUser(login);
     
      if (response) {
        setError("");
        sessionStorage.setItem(
          "accessToken",
          `Bearer ${response.data.accesToken}`
        );
        sessionStorage.setItem(
          "refreshToken",
          `Bearer ${response.data.refreshToken}`
        );
        window.localStorage.setItem("loggedIn", true);
        setHeaders(getAccessToken());
        setAccount({
          username: response.data.username,
          name: response.data.name,
          isStudent:  response.data.isStudent,
          isRider: response.data.isRider,
        });
        window.sessionStorage.setItem("username",response.data.username)
        isUserAuthenticated(true);
        Navigate("/home");
      } else {
        setError("Something went wrong");
        window.localStorage.clear();
      }
    }

  return (
    <>
      <Overlay>
        <Component style={{ background: 'rgba(0, 0, 0, 0.1)', borderWidth: "0px" }}>
          <Box>
            <Image src={BackgroundImage} style={{ width: '250px', height: '180px' }} />

            <Wrapper style={{ background: 'Radial-gradient(circle,#FFA500,#003366)', border: '0px', borderRadius: '20px', marginBottom: '55px' }}>
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter UserName" />
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password" />
              {error && <Error>{error}</Error>}
              <LoginButton style={{ background: "#003366", color: '#FFA500' }}
                variant="contained"
                onClick={() => loginUser()}>
                Login
              </LoginButton>
              <Text style={{ textAlign: "center" }}> OR</Text>
              <SignUpButton style={{ background: "#003366", color: '#FFA500' }} onClick={toggelState}>
                Create an Account
              </SignUpButton>
            </Wrapper>
          </Box>
        </Component>
      </Overlay>
    </>
  );
};

export default Login;
