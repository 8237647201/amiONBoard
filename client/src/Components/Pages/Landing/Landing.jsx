import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

// Import the background image
import BackgroundImage from '../../Image/you.jpg';

function Landing(props) {
  const { isLoggedIn, setIsLoggedIn } = useState(false);

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-4"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingRight: '10rem',
      }}
    >
      <div className="text-white text-left" style={{ paddingLeft: '2rem' }}>
        <h1 className="text-6xl font-bold mb-4" style={{ color: "white" }}>Book your</h1>
        <h1 className="text-6xl font-bold mb-4" style={{ color: "#ff9000" }}>Ride!</h1>

        <p className="text-lg" style={{ color: "white", fontWeight: "bold" }}>Study, Chill, Repeat - The College Way</p>
        <ul className="mt-4 space-y-2">
          <li className="flex space-x-2">
            {!isLoggedIn && (
              <>
                <Link to="/login">
                  <button className="bg-transparent border border-white px-4 py-3 rounded-lg">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-transparent border border-white px-4 py-3 rounded-lg" style={{ backgroundColor: "#ff9000" }}>
                    Signup
                  </button>
                </Link>
              </>
            )}
          </li>
          <li className="flex space-x-2">
            {isLoggedIn && (
              <>
                <Link to="/">
                  <button
                    onClick={() => {
                      setIsLoggedIn(false);
                      toast.success('Logged Out');
                    }}
                    className="bg-richblack-800 py-3 px-4 rounded-lg border border-white"
                  >
                    Log Out
                  </button>
                </Link>
                <Link to="/dashboard">
                  <button className="bg-transparent border border-white px-4 py-3 rounded-lg">
                    Dashboard
                  </button>
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Landing;
