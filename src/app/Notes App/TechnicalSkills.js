// TechnicalSkills.js
import React from 'react';
import '../../css/TechnicalSkills.css';
import { useNavigate } from 'react-router-dom';

const TechnicalSkills = () => {
  const navigate = useNavigate();
  const handlePreviousClick = () => {
      navigate("/app");
  };

  return (
    <div className='technical-skills-container'>
      <div className="top-bar-placeholder">
        {/* <div className='link2'> */}
        <i
          class="fa-solid fa-greater-than fa-rotate-180"
          onClick={handlePreviousClick}
        ></i>
        {/* </div> */}
        <span>Folders</span>
      </div>
      <div className='content'>
        <h3>LANGUAGES</h3>
        <p>C, C++, Javascript, Java</p>

        <h3>FRAMEWORKS/LIBRARIES</h3>
        <p>Angular, React.js, Serverless</p>

        <h3>TOOLS</h3>
        <p>Git, Github, AWS, VSCode, Postman</p>

        <h3>DATABASES</h3>
        <p>MySQL, MongoDB, DynamoDB</p>

        <h3>OTHERS</h3>
        <p>Data Structures & Algorithms, OOP, Technical Writing</p>
      </div>
      <div className='footer-icons'>
        <i className="fa-solid fa-folder"></i>
        <i className="fa-solid fa-camera"></i>
        <i className="fa-solid fa-pencil"></i>
        <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  );
};

export default TechnicalSkills;
