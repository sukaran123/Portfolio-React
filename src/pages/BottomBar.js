import React, { useState } from "react";
import "../css/BottomBar.css";
import { Navigate } from 'react-router-dom';
import flash from '../utils/flash_light_icon-removebg-preview.png'

const BottomBar = () => {
    const [redirect, setRedirect] = useState(false);

  const handleSliderClick = () => {
    setRedirect(true); // Set redirect state to true
  };

  if (redirect) {
    return <Navigate to="/app" />; // Redirect to the desired route
  }
  return (
    <div className="bottom-bar">
      <div className="icons">
        <div className="icon flash-light-icon">
          {/* <i className="fas fa-flashlight"></i> */}
          <img src={flash} alt="flash light icon" className="flash-light"/>
        </div>
        <div className="icon">
          <i className="fa-solid fa-camera"></i>
        </div>
      </div>
      <div className="sliding-container" onClick={handleSliderClick}>
        <div className="sliding-icon"></div>
      </div>
    </div>
  );
};

export default BottomBar;
