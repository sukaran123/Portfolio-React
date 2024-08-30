import React from 'react'
import '../../css/SoftSkills.css'
import { useNavigate } from 'react-router-dom';

const SoftSkills = () => {
  const navigate = useNavigate();
    const handlePreviousClick = () => {
        navigate("/app");
    };
  return (
    <div className='soft-skills-container'>
        <div className="top-bar-placeholder">
        {/* <div className='link2'> */}
        <i
          class="fa-solid fa-greater-than fa-rotate-180"
          onClick={handlePreviousClick}
        ></i>
        {/* </div> */}
        <span>Notes</span>
      </div>
      <div className='content1'>
        <h3>Soft Skills</h3>
        <p>Communication Skills, Problem Solving, Optimistic, Leadership, Team Player, Management, Analytical Abilities, Willingness to learn</p>
      </div>
      <div className='footer-icons'>
        <i className="fa-solid fa-folder"></i>
        <i className="fa-solid fa-camera"></i>
        <i className="fa-solid fa-pencil"></i>
        <i className="fa-solid fa-share-nodes"></i>
      </div>
    </div>
  )
}

export default SoftSkills