import React from 'react';
import '../css/AboutMe.css'; // Ensure this path matches your project structure
import myPhoto from '../utils/my_photo-removebg-preview.png'
import { Link } from 'react-router-dom';
// import App from '../App';
// import AppPage from '../pages/AppPage';

const AboutMe = () => {
    const handlePreviousClick = () => {
        window.location.href = '/app';
    }
  return (
    // <div className="screen">
        <div className="about-me-container">
      {/* Top Bar Placeholder */}
      <div className="top-bar-placeholder">
        {/* <div className='link2'> */}
        <i class="fa-solid fa-greater-than fa-rotate-180" onClick={handlePreviousClick}></i>
        {/* </div> */}
        <span>About Me</span>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <img src={myPhoto} alt='my profile-pic' className='profile-pic'/>
        <h1 className="name">Sukaran Singh</h1>
        <p className="description">
          I'm a 🎓 final year Computer Science Engineering student with a knack for solving real life problems. 
          I'm also a 💻 Full Stack Developer with 50% Frontend and 50% Backend. I'm always up for a challenge. 
          Let's create 💡 transformative solutions together! 💯
        </p>
      </div>

      {/* Social Links Section */}
      <div className="social-links">
        <a href="https://leetcode.com/u/SukaranSingh/" className="social-button">Leetcode<br />Sukaran Singh</a>
        <a href="https://www.linkedin.com/in/sukaran-singh-1a0163257/" className="social-button">LinkedIn<br />Sukaran Singh</a>
        <a href="https://github.com/sukaran123" className="social-button">GitHub<br />sukaran123</a>
        <a href="https://www.instagram.com/sukaran.s?igsh=MTkwbnpydGlmaWV4Yw==" className="social-button">Instagram<br />sukaran.s</a>
      </div>
      <p className='description2'>
        I have a passion for creating innovative products. If you have an exciting idea or are interested in hiring me, please reach out! (Actively seeking new opportunity)
      </p>
      <Link className='link'>
        <p className='description3'>sukaran2003@gmail.com</p>
      </Link>
    </div>
    // </div>
  );
};

export default AboutMe;
