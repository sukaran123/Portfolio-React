import React, { useEffect, useState } from 'react';
import '../css/HomePage.css'; // Ensure this path is correct

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Format date and time
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="homepage-content">
      <div className="time-display">
        <p className="date">{formattedDate}</p>
        <h1>{formattedTime}</h1>
      </div>
    </div>
  );
};

export default HomePage;
