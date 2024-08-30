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
  },
  {
    title: "Blog Management System",
    description: "Create blogs without creating an account",
    img: blogImage,
  },
  {
    title: "Preet Collection",
    description: "E-commerce webpage made with HTML, CSS and Bootstrap",
    img: preetImage,
  },
  {
    title: "HRMS",
    description:
      "User-interface of Employee Management System made with HTML, CSS",
    img: hrms,
  },
  // { title: "Login Screen with Java", description: "Simple login Screen made with java", img: loginImage },
  // { title: "Portfolio", description: "My website for introducing myself made with HTML, CSS", img: portfolioImage },
];
// Add more projects as needed

const projects2 = [
  {
    title: "Calculator",
    description: "Simple calculator made with HTML, CSS and JavaScript",
    img: calculatorImage,
  },
  {
    title: "Login Screen with Java",
    description: "Simple login Screen made with java",
    img: loginImage,
  },
  {
    title: "Portfolio",
    description: "My website for introducing myself made with HTML, CSS",
    img: portfolioImage,
  },
];
const Projects = () => {
  const navigate = useNavigate();
    const handlePreviousClick = () => {
        navigate("/app");
    };

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slider
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Autoplay speed in ms
    swipe: true, // Enable swiping
    arrows: false, // Hide arrows for navigation
  };
  return (
    <div className="projects-container">
      <div className="top-bar-placeholder">
        {/* <div className='link2'> */}
        <i
          class="fa-solid fa-greater-than fa-rotate-180"
          onClick={handlePreviousClick}
        ></i>
        {/* </div> */}
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
                <button className="button-1">Github</button>
                <button className="button-2">Live</button>
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
              <button className="button-1">Github</button>
              <button className="button-2">Live</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
