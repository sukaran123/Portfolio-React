import React, { useState } from "react";
import "../css/Mail.css";
import myPhoto from "../utils/my_photo-removebg-preview.png";

const Mail = () => {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    message: "",
  });

  const handlePreviousClick = () => {
    window.location.href = "/app";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSendClick = () => {
    const { name, mail, message } = formData;
    const mailtoLink = `mailto:your-email@example.com?subject=Message from ${name}&body=Name: ${name}%0D%0AEmail: ${mail}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="mail-container">
      <div className="top-bar-place">
        <div className="top-bar-placeholder2">
          <i
            className="fa-solid fa-greater-than fa-rotate-180"
            onClick={handlePreviousClick}
          ></i>
          <span>Mail</span>
        </div>
        <div className="profile">
          <img src={myPhoto} alt="Sukaran Singh" className="profile-pic" />
          <div className="profile-info">
            <p>Sukaran Singh</p>
          </div>
        </div>
        {/* Make this icon clickable for sending the email */}
        <i className="fa-solid fa-paper-plane" onClick={handleSendClick}></i>
      </div>
      <div className="form">
        <form layout="vertical" className="add-form">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <hr />
          <div>
            <label htmlFor="mail">Mail:</label>
            <input
              type="email"
              id="mail"
              name="mail"
              value={formData.mail}
              onChange={handleInputChange}
            />
          </div>
          <hr />
          <div>
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <hr />
        </form>
      </div>
    </div>
  );
};

export default Mail;
