import React, {useState} from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Navbar = () => {

        const [openMenu, setOpenMenu] = useState(false);

        const toggleMenu = () => {
            setOpenMenu(!openMenu);
        };

        const scrollToElement = (elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offset = window.scrollY;
                const targetPosition = elementPosition + offset - 100;;
                window.scrollTo({
                    behavior: 'smooth',
                    top: targetPosition,
                });
            }
        };
        
    return(
        <>

            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

          <nav className="nav-wrapper">
            <div className="nav-content" >
                <img className="logo" src="./assets/images/mpLogo.png" alt="" />

                <ul>
                    
                    <li>
                    <a href="#home" className="menu-item" onClick={() => scrollToElement('home-section')}>Home</a>
                    </li>
                    
                    <li>
                    <a href="#Skills" className="menu-item" onClick={() => scrollToElement('Skills-section')}>Skills</a>
                    </li>
                    
                    <li>
                    <a href="#Work-Experience" className="menu-item" onClick={() => scrollToElement('Work-Experience-section')}>Work Experience</a>
                    </li>

                    <li>
                    <a href="/assets/pdfs/resume.pdf" className="menu-item" download='resume.pdf'>Resume</a>
                    </li>
                    
                    <button className="contact-btn" onClick={() => { window.open("https://www.linkedin.com/in/m4rcos-d/", "_blank"); }}>
                        Hire Me
                    </button>

                </ul>

                <button class="menu-btn" onClick={toggleMenu}>
                    <span
                    class={"material-symbols-outlined"}
                    style={{ fontSize: "1.8rem"}}
                    >
                        {openMenu ? <CloseOutlinedIcon/> : <MenuOutlinedIcon/>}
                    </span>
                </button>
            </div>
            </nav>  
        </>
    )
}

export default Navbar