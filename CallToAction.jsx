import React, { useState, useEffect } from 'react';
import './CallToAction.css';

const CallToAction = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the timer when component unmounts
    return () => clearInterval(timer);
  }, []);

  // Format the time remaining into minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  // Add leading zeros to seconds if less than 10
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleSignUp = () => {
    // Add functionality for sign up action
    alert('Sign up functionality goes here!');
  };

  return (
    <div className="call-to-action">
      <h2>Sign Up Now!</h2>
      <p>Hurry! Limited time offer: {minutes}:{formattedSeconds} remaining</p>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default CallToAction;
