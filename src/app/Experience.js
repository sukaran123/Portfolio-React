import React, { useState } from "react";
import "../css/Experience.css";
import myPhoto from "../utils/my_photo-removebg-preview.png";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const navigate = useNavigate();
    const handlePreviousClick = () => {
        navigate("/app");
    };

  const toggleCard = (cardName) => {
    setExpandedCard(expandedCard === cardName ? null : cardName);
  };

  return (
    <div className="experience-container">
      <div className="top-bar-placeholder">
        <i
          className="fa-solid fa-greater-than fa-rotate-180"
          onClick={handlePreviousClick}
        ></i>
        <span>Experience</span>
      </div>

      <div className="experience-content">
        <div className="experience-details">
          <div className="profile">
            <img src={myPhoto} alt="Sukaran Singh" className="profile-pic" />
            <div className="profile-info">
              <h3>Sukaran Singh</h3>
              <p>Exp: 2 months (Internship)</p>
            </div>
          </div>
          <p className="experience-description">
            I am passionate about solving problems through programming and have
            2 months of experience working at virtual internships in both Bharat Intern and CodSoft
            sectors, enhancing my skill set. I have immersed myself in software
            development, working with technologies such as HTML, CSS, Bootstrap, JavaScript, React.js, Express.js
            Node.js. As a Full Stack Developer, I excel in
            creating high-performance web applications, broadening
            my industry insights and technical skills.
          </p>
        </div>

        <div className="experience-cards">
          <div className="experience-card">
            <h3>Bharat Intern</h3>
            <p>10/3/24-10/4/24</p>
            <p>
              • Developed and maintained web applications using HTML, CSS,
              JavaScript, React.js, Node.js, Express.js, and MongoDB.{" "}
            </p>
            {/* <p>• Designed user interface elements such as buttons, forms, menus, and navigation bars.</p> */}
            {expandedCard === "Bharat Intern" && (
              <div>
                <p>
                  • Designed user interface elements such as buttons, forms,
                  menus and navigation bars.
                </p>
                <p>
                  • Researched new technologies that can be used to improve
                  existing web applications.
                </p>
                <p>• API Integration for adding, editing and deletion</p>
                <p>
                  • MongoDB for the database which stores the data provided by
                  the user
                </p>
                <p>• Created Websites such as -:</p>
                <p>1. Registration Form using mern stack</p>
                <p>2. Blog Management System using mern stack</p>
              </div>
            )}
            {/* Add a new div wrapper for flexbox control */}
            <div className="button-wrapper">
              <button
                onClick={() => toggleCard("Bharat Intern")}
                className="know-more"
              >
                {expandedCard === "Bharat Intern" ? "Show Less" : "Know More >"}
              </button>
            </div>
          </div>

          <div className="experience-card">
            <h3>CodSoft</h3>
            <p>03/24–04/24</p>
            <p>
              • Developed and maintained web applications using HTML, CSS and
              JavaScript.
            </p>
            {expandedCard === "CodSoft" && (
              <div>
                <p>
                  • Designed user interface elements such as buttons, forms,
                  menus, and navigation bars.
                </p>
                <p>
                  • Researched new technologies that can be used to improve
                  existing web applications.
                </p>
                <p>• Created the Websites like -:</p>
                <p>1. Landing Page of Restaurant using HTML and CSS.</p>
                <p>2. Portfolio Website using HTML and CSS.</p>
                <p>3. Calculator using HTML, CSS, and JavaScript.</p>
              </div>
            )}
            {/* Add a new div wrapper for flexbox control */}
            <div className="button-wrapper">
              <button
                onClick={() => toggleCard("CodSoft")}
                className="know-more"
              >
                {expandedCard === "CodSoft"
                  ? "Show Less"
                  : "Know More >"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
