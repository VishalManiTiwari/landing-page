import React from 'react';
import './WhyChooseSection.css'; 
import { GrUserExpert } from "react-icons/gr";
import { AiOutlineConsoleSql } from "react-icons/ai"; // Corrected import
import { FcCustomerSupport } from "react-icons/fc";
import { GrDocumentPerformance } from "react-icons/gr";
import { GiPodiumWinner } from "react-icons/gi"; // Moved import here

const WhyChooseSection = () => {
  return (
    <div className="why-choose-section">
      <div className="icon">
        <GrUserExpert />
        <p>Expertise</p>
      </div>
      <div className="icon">
        <AiOutlineConsoleSql />
        <p>Reliability</p>
      </div>
      <div className="icon">
        <FcCustomerSupport />
        <p>Customer Satisfaction</p>
      </div>
      <div className="icon">
        <GrDocumentPerformance />
        <p>Performance</p>
      </div>
      <div className="icon">
        <GiPodiumWinner />
        <p>Innovation</p>
      </div>
    </div>
  );
};

export default WhyChooseSection;
