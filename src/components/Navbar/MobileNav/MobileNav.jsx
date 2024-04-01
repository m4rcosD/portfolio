import React from "react";
import './MobileNav.css'

const MobileNav = ({isOpen, toggleMenu}) => {
    return (
        <>
            
            <div
                className={`mobile-menu ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
            >
            <div className="mobile-menu-container">
                <img className="logo" src="./assets/images/mpLogo.png" alt="" />
                <ul>

                    <li>
                        <a className="menu-item">Home</a>
                    </li>

                    <li>
                        <a className="menu-item">Skills</a>
                    </li>

                    <li>
                        <a className="menu-item">Work Experience</a>
                    </li>

                    
                    <button className="contact-btn" onClick={() => {window.location.href = "https://www.linkedin.com/in/m4rcos-d/";}}>
                        Hire Me
                    </button>

                </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav