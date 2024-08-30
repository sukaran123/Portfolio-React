// PhoneStructure.js
import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "../css/PhoneStructure.css";
import TopBar from "./TopBar";
import HomePage from "./HomePage";
import AppPage from "./AppPage"; // Import the AppPage component
import BottomBar from "./BottomBar";
import Notes from "../app/Notes";
import Education from "../app/Education";
import Experience from "../app/Experience";
import Projects from "../app/Projects";
import AboutMe from "../app/AboutMe";
import TechnicalSkills from "../app/Notes App/TechnicalSkills";
import SoftSkills from "../app/Notes App/SoftSkills";
import Mail from "../app/Mail";

const PhoneStructure = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the path is a valid route
    const validRoutes = [
      "/",
      "/app",
      "/app/notes",
      "/app/education",
      "/app/experience",
      "/app/projects",
      "/app/mail",
      "/app/about",
      "/app/notes/1",
      "/app/notes/2",
      "/app/notes/3",
      "/app/notes/4",
    ];

    if (!validRoutes.includes(location.pathname)) {
      // Redirect to home page if the current path is not valid
      navigate('/', { replace: true });
    }
  }, [navigate, location.pathname]);

  

  const isAppScreen = [
    "/app/notes",
    "/app/education",
    "/app/experience",
    "/app/projects",
    "/app/about",
    "/app/notes/1",
    "/app/notes/2",
    "/app/notes/3",
    "/app/notes/4",

    // Add more routes for other apps like mail and music
    "/app/mail",
    // "/app/music",
  ].some((path) => location.pathname.startsWith(path));

  // Show BottomBar only on specific routes
  const showBottomBar = location.pathname === "/";

  return (
    <div className="outer-div">
      <div className="phone">
        <div className={`screen ${isAppScreen ? 'white-bg' : ''}`}>
          <div className={`top-bar ${isAppScreen ? "black-icons" : ""}`}>
            <TopBar />
          </div>
          <div className="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/app" element={<AppPage />} />{" "}
              {/* Add route for AppPage */}
              {/* Add more routes as needed */}
              {/* <Route path="/app/mail" element={<Mail />} /> */}
              {/* <Route path="/app/music" element={<Music />} /> */}
              <Route path="/app/notes" element={<Notes />} />
              <Route path="/app/education" element={<Education />} />
              {/* <Route path="/app/resume" element={<Resume />} /> */}
              <Route path="/app/experience" element={<Experience />} />
              <Route path="/app/projects" element={<Projects />} />
              <Route path="/app/mail" element={<Mail />} />
              <Route path="/app/about" element={<AboutMe />} />
              <Route path="/app/notes/1" element={<TechnicalSkills />} />
              <Route path="/app/notes/2" element={<SoftSkills />} />
            </Routes>
          </div>
          {showBottomBar && (
            <div className="bottom-bar">
              <BottomBar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhoneStructure;
