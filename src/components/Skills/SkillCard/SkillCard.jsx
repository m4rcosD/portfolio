import React from 'react'
import './SkillCard.css'

const SkillCard = ({ title, iconURL, isActivate, onClick }) => {
  return (
    <div 
    className={`skills-Card ${isActivate ? "active" : "" }`}
    onClick={() => onClick()}
    >
        <div className='skill-icon'>
            <img src={iconURL} alt={title} />
        </div>

        <span>{title}</span>
    </div>
  );
};

export default SkillCard