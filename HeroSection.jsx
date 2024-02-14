import React from 'react';
import './HeroSection.css'; 
import { FaCalendar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { FaRegHourglass } from "react-icons/fa";

const HeroSection = () => {
  // Function to handle registration
  const handleRegistration = () => {
    // Add your registration logic here
    console.log("User registered!");
    // For example, you could open a registration modal or redirect to a registration page
  };

  return (
    <div className="hero-section">
      <div className="mylogo">
        <img className='logo' src="https://img.freepik.com/premium-vector/pencil-vector-illustration-icon-logo-education_598213-7323.jpg?w=900" alt="logo" width={80} />
      </div>
      <div className='container'>
        <div className="content">
          <h1>Discover a Consultant's <br /> Approach to Problem <br /> Solving</h1>
          <p>Learn the proven approach used by top strategy consultants to tackle 
            <br /> complex business challenges effectively. Solve an MBB case study LIVE
             <br /> with Ashwani to understand the concept hands-on.</p>
          <div className='box'>
            <p className='border'><FaCalendar /> <br /> 3rd March </p>
            <p className='border'> <IoMdTime /> <br /> 1PM <br /> Onward </p>
            <p className='border'> <FaRegHourglass /> <br /> 2.5 Hours</p>
          </div>
          <button className='btn' onClick={handleRegistration}>Register Now at $6.2 </button> <br />
          <a href="#">click here to get team discount</a>
        </div>
        <div className='founder-image'>
          <img className='myimage' src="https://blog.infodiagram.com/wp-content/uploads/2017/11/98-768x444.png" alt="founder" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
