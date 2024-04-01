import React from "react";
import './Hero.css'

const Hero = () => {
    return (
    <section className="hero-container" id="home-section">
        <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
            Passionate software engineer with a strong focus on web development. Skilled in TypeScript, Node.js, and Git, I thrive in collaborative, Agile environments.
        </p>
        </div>
        <div className="hero-img">
            <div>
                <div className="tech-icon">
                    <img src="./assets/images/react_logo.png" alt="" />
                </div>
                <img src="./assets/images/programmer.png" alt="" />
            </div>

            <div>
                <div className="tech-icon">
                <img src="./assets/images/CSS3_logo.png" alt="" />
            </div>
        <div className="tech-icon">
                <img src="./assets/images/HTML5_logo.png" alt=""  />
            </div> 
        <div className="tech-icon">
                <img src="./assets/images/javascript_logo.png" alt="" />
            </div>
        <div className="tech-icon">
                <img src="./assets/images/typescript_logo.png" alt="" />
            </div>
        </div></div>
        
    </section>
        )
}

export default Hero;