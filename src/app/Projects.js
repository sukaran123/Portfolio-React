import React from "react";
import "../css/Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import doctorImage from "../utils/doctor.png";
import blogImage from "../utils/blog.png";
import preetImage from "../utils/Preet collection.png";
import calculatorImage from "../utils/calculator.png";
import loginImage from "../utils/login.png";
import portfolioImage from "../utils/portfolio.png";
import hrms from "../utils/hrms.png";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Doctor Management System",
    description:
      "Doctor Appointment system the user can book an appointment with the doctor",
    img: doctorImage,
    githubLink: "https://github.com/sukaran123/Doctor-Appointment-System", // Add GitHub link
    liveLink: "https://doctor-appointment-system-a24t.onrender.com", // Add live link
  },
  {
    title: "Blog Management System",
    description: "Create blogs without creating an account",
    img: blogImage,
    githubLink: "https://github.com/sukaran123/Blog-Management", // Add GitHub link
    liveLink: "https://blog-management-s0me.onrender.com", // Add live link
  },
  {
    title: "Preet Collection",
    description: "E-commerce webpage made with HTML, CSS and Bootstrap",
    img: preetImage,
    githubLink: "https://github.com/sukaran123/ecommerce-preet-collection", // Add GitHub link
    liveLink: "https://sukaran123.github.io/ecommerce-preet-collection/", // Add live link
  },
  {
    title: "HRMS",
    description:
      "User-interface of Employee Management System made with HTML, CSS",
    img: hrms,
    githubLink: "https://github.com/example/hrms", // Add GitHub link
    liveLink: "https://example.com/hrms", // Add live link
  },
  // Add more projects as needed
];

const projects2 = [
  {
    title: "Calculator",
    description: "Simple calculator made with HTML, CSS and JavaScript",
    img: calculatorImage,
    githubLink: "https://github.com/sukaran123/CodSoft/tree/main/Level%201/Task3", // Add GitHub link
    liveLink: "https://sukaran123.github.io/calculator/", // Add live link
  },
  {
    title: "Login Screen with Java",
    description: "Simple login Screen made with java",
    img: loginImage,
    githubLink: "https://github.com/sukaran123/loginwithjava", // Add GitHub link
    // liveLink: "https://example.com/login-screen-java", // Add live link
  },
  {
    title: "Portfolio",
    description: "My website for introducing myself made with HTML, CSS",
    img: portfolioImage,
    githubLink: "https://github.com/sukaran123/CodSoft/tree/main/Level%201/Task2", // Add GitHub link
    liveLink: "https://sukaran123.github.io/portfolio/", // Add live link
  },
];

const Projects = () => {
  const navigate = useNavigate();
  
  const handlePreviousClick = () => {
    navigate("/app");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    arrows: false,
  };

  const openLink = (url) => {
    window.open(url, "_blank"); // Opens the URL in a new tab
  };

  return (
    <div className="projects-container">
      <div className="top-bar-placeholder">
        <i
          className="fa-solid fa-greater-than fa-rotate-180"
          onClick={handlePreviousClick}
        ></i>
        <span>Projects</span>
      </div>
      <h2>Top Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.img} alt={project.title} />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <button
                  className="button-1"
                  onClick={() => openLink(project.githubLink)}
                >
                  Github
                </button>
                <button
                  className="button-2"
                  onClick={() => openLink(project.liveLink)}
                >
                  Live
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <h2>More Projects</h2>
      {projects2.map((project, index) => (
        <div key={index} className="project-item">
          <img src={project.img} alt={project.title} />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <button
                className="button-1"
                onClick={() => openLink(project.githubLink)}
              >
                Github
              </button>
              <button
                className="button-2"
                onClick={() => openLink(project.liveLink)}
              >
                Live
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
