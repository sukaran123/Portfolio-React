import React, { useEffect } from "react";
import "../css/Education.css";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const navigate = useNavigate();
    const handlePreviousClick = () => {
        navigate("/app");
    };
  useEffect(() => {
    const phoneContainer = document.querySelector(".phone-container");
    if (phoneContainer) {
      phoneContainer.style.transform = "scale(1)";
    }
  }, []);
  return (
    <div className="education-container">
      <div className="top-bar-placeholder">
        {/* <div className='link2'> */}
        <i
          class="fa-solid fa-greater-than fa-rotate-180"
          onClick={handlePreviousClick}
        ></i>
        {/* </div> */}
        <span>Eduction</span>
      </div>
      <div class="education-card">
        <div class="education-item">
          <div class="education-header">
            <i className="fa-solid fa-clipboard"></i>
            B.E in CSE
          </div>
          <div class="education-institute">Chitkara University, Punjab</div>
          <div class="education-location">Rajpura, Punjab</div>
          <div class="education-score">CGPA 7.84/10</div>
        </div>
        <div class="education-item">
          <div class="education-header">
            <i className="fa-solid fa-clipboard"></i>
            Class XII with Non-Medical
          </div>
          <div class="education-institute">Mukat Public School</div>
          <div class="education-location">
            <p>CBSE</p>
            <p>Rajpura Punjab</p>
          </div>
          <div class="education-score">Percentage 65%</div>
        </div>
        <div class="education-item">
          <div class="education-header">
            <i className="fa-solid fa-clipboard"></i>
            Class X
          </div>
          <div class="education-institute">Mukat Public School</div>
          <div class="education-location">
            <p>CBSE</p>
            <p>Rajpura Punjab</p>
          </div>
          <div class="education-score">Percentage 65.6%</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
