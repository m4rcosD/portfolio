import React from "react";
import './MobileNav.css'

const MobileNav = ({isOpen, toggleMenu}) => {

    const scrollToElement = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offset = window.scrollY;
            const targetPosition = elementPosition + offset - 100;;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

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
                    <a href="#home-section" className="menu-item" onClick={() => scrollToElement('home-section')}>Home</a>
                    </li>
                    
                    <li>
                    <a href="#Skills-section" className="menu-item" onClick={() => scrollToElement('Skills-section')}>Skills</a>
                    </li>
                    
                    <li>
                    <a href="#Work-Experience-section" className="menu-item" onClick={() => scrollToElement('Work-Experience-section')}>Work Experience</a>
                    </li>

                    <li>
                    <a href="#Resume-section" className="menu-item" onClick={() => { window.open("https://resume.io/r/CI4OCZlCC", "_blank"); }}>Resume</a>
                    </li>
                    
                    <button className="contact-btn" onClick={() => { window.open("https://www.linkedin.com/in/m4rcos-d/", "_blank"); }}>
                        Hire Me
                    </button>

                </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav