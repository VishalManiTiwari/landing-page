import React, { useState } from 'react';
import './FounderSection.css';

const FounderSection = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="founder-section">
      <img
        src="https://i.ytimg.com/vi/U96L_ZYASHI/sddefault.jpg"
        alt="Founder Darsheel"
        onClick={toggleDetails}
        className={showDetails ? 'expanded' : ''}
      />
      <p onClick={toggleDetails}>Meet our visionary founder, Darsheel!</p>
      {showDetails && (
        <div className="details">
          <p>Name: Darsheel</p>
          <p>Role: Founder & CEO</p>
          <p>About: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.</p>
        </div>
      )}
    </div>
  );
};

export default FounderSection;
