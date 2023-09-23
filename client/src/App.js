import "./index.css";
import Login from "./Components/Pages/Login/Login";
import { useState } from "react";
import DataProvider from "./Components/DataProvider/Dataprovider.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Header from "./Components/Pages/Header/Header.jsx";
import Landing from "./Components/Pages/Landing/Landing.jsx";
import SignUP from "./Components/Pages/Login/SignUP";

import Profile from "./Components/Pages/Profile/Profile";
import About from "./Components/Pages/About/About";
import Ride from "./Components/Pages/Home/Ride/Ride.jsx";
import CreateProfile from "./Components/Pages/Profile/CreateProfile";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/" />
  );
};

function App() {
  
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  const [isAuthenticated, isUserAuthenticated] = useState(isLoggedIn);

  return (
    <DataProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/signup" element={<SignUP />} />
            <Route
              exact
              path="/login"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route exact path="/home" element={<Home />} />
            </Route>

            <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route exact path="/about" element={<About />} />
             </Route>

            <Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route exact path="/profile" element={<Profile />} />
            </Route>
 
            <Route path="/ride" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route exact path="/ride" element={<Ride />} />
            </Route>
            
          </Routes>
          
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
