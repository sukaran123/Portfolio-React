import React from "react";
import "../css/AppPage.css"; // Make sure this path matches your project structure
import { Link } from "react-router-dom";
// import ResumePage from "./ResumePage";
const AppPage = () => {
  // Example array of icon data
  const appIcons = [
    {
      name: "Mail",
      imageSrc: require("../utils/google-mail-icons.webp"),
      link: "/app/mail",
    },
    {
      name: "Notes",
      imageSrc: require("../utils/notes icon.jpeg"),
      link: "/app/notes",
    },
    {
      name: "Education",
      imageSrc: require("../utils/education icon.png"),
      link: "/app/education",
    },
    {
      name: "Resume",
      imageSrc: require("../utils/resume icon.png"),
      link: "https://drive.google.com/file/d/1BCqQwKU87bHfELbdMr4wXODBqEUF9CQn/view?usp=sharing",
    },
    {
      name: "Experience",
      imageSrc: require("../utils/experience icon.jpg"),
      link: "/app/experience",
    },
    {
      name: "Projects",
      imageSrc: require("../utils/projects icon.png"),
      link: "/app/projects",
    },
    {
      name: "About Me",
      imageSrc: require("../utils/my_photo-removebg-preview.png"),
      link: "/app/about",
    },
  ];
  const appIcons2 = [
    {
      name: "Github",
      imageSrc: require("../utils/github icon.webp"),
      link: "https://github.com/sukaran123",
    },
    {
      name: "Linkedin",
      imageSrc: require("../utils/linkedin icon.webp"),
      link: "https://www.linkedin.com/in/sukaran-singh-1a0163257/",
    },
    {
      name: "Resume",
      imageSrc: require("../utils/resume icon.png"),
      link: "https://drive.google.com/file/d/1BCqQwKU87bHfELbdMr4wXODBqEUF9CQn/view?usp=sharing",
    },
    {
      name: "Leetcode",
      imageSrc: require("../utils/leetcode icon.png"),
      link: "https://leetcode.com/u/SukaranSingh/",
    },
  ];

  return (
    <div className="app-screen">
      {/* App icons grid */}
      <div className="app-grid">
        {appIcons.map((icon, index) => (
          <Link key={index} to={icon.link} className="app-icon">
            <img src={icon.imageSrc} alt={icon.name} className="icon-image" />
            <span style={{ fontSize: "small", textDecoration: "none" }}>
              {icon.name}
            </span>
          </Link>
        ))}
      </div>
      {/* <Routes> */}
        {/* <Route path="/resume" element={<ResumePage />} /> */}
      {/* </Routes> */}
      <div className="app-dock">
        <div className="app-grid">
          {appIcons2.map((icon, index) => (
            <div key={index} className="app-icon">
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="app"
              >
                <img
                  src={icon.imageSrc}
                  alt={icon.name}
                  className="icon-image"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppPage;
