import React, { useEffect, useState } from "react";
import "../css/TopBar.css";
import { useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation()
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date().toLocaleTimeString());
    const intervalId = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  const isAppScreen = [
    "/app/notes",
    "/app/education",
    "/app/experience",
    "/app/projects",
    "/app/about",
    "/app/mail"
    // Add more app routes here if needed
  ].some((path) => location.pathname.startsWith(path));
  const isAppScreen2 = [
    "/app"
    // Add more app routes here if needed
  ].some((path) => location.pathname.startsWith(path));
  return (
    <div className="top-bar">
      <div className="bar">
        {/* Phone's notch area and signal icons */}
        {(isAppScreen || isAppScreen2) && (
          <div className={`time2 ${isAppScreen ? "black-time" : ""}`}>
            {currentTime}
          </div>
        )}
        <div className="structure"></div>
        <div className={`serious ${isAppScreen ? "black-icons" : ""}`}>
          <i className="fa-solid fa-signal"></i>
          <i className="fa-solid fa-wifi"></i>
          <i
            className="fa-solid fa-battery-full"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
