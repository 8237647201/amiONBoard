
import './App.css';
import Login from './Components/Pages/Login/Login';
import { useState } from 'react';
import DataProvider from './Components/DataProvider/Dataprovider.jsx';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Landing from './Components/Pages/Home/Landing';
import Header from "./Components/Pages/Header/Header.jsx"

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
  return (
   <DataProvider>
     <BrowserRouter>
        <div style={{ marginTop: 64 }}>
          <Routes>
            <Route
              exact
              path="/login"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />
            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route exact path="/" element={<Landing/>} />g
            </Route>
            </Routes>
            </div>
    </BrowserRouter>
    
   </DataProvider>
  );
}

export default App;
