//include these file in every folder for tailwind
import './index.css';
import Login from './Components/Pages/Login/Login';
import { useState } from 'react';
// import DataProvider from './Components/DataProvider/Dataprovider.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Header from "./Components/Pages/Header/Header.jsx"
import Landing from "./Components/Pages/Landing/Landing.jsx"

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Header />    
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};
function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    
    <BrowserRouter>
     {/* <Header/> */}
      {/* <Landing isLoggedIn={isLoggedIn} /> */}
      <Home isLoggedIn={isLoggedIn} />
      {/* <Home/> */}
    </BrowserRouter>
  //  <DataProvider>
  //    <BrowserRouter>
  //       <div style={{ marginTop: 64 }}>
  //         <Routes>
  //           <Route
  //             exact
  //             path="/login"
  //             element={<Login isUserAuthenticated={isUserAuthenticated} />}
  //           />
  //           <Route
  //             path="/"
  //             element={<PrivateRoute isAuthenticated={isAuthenticated} />}
  //           >
  //             <Route exact path="/" element={<Home/>} />g
  //           </Route>
  //           </Routes>
  //           </div>
  //   </BrowserRouter>
    
  //  </DataProvider>
  );
}

export default App;
