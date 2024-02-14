import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Add leading zeros to seconds if less than 10
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="countdown-timer">
      <div className="countdown-content">
        <h2>Hurry! Limited Time Offer</h2>
        <p>Time Left: {minutes} min {formattedSeconds} sec</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
