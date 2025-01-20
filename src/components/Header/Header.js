import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Social icons
import './header.css';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    // Toggle function for the navigation menu

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const toggleNav = () => {
        setIsNavActive(prevState => !prevState);
    };

    // Function to handle scrolling when a navigation item is clicked
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // Close the navigation if it's open (for mobile view)
        if (isNavActive) {
            setIsNavActive(false);
        }
    };

    return (
        <div className='header-container'>
            <div>
                <span className='name-span' onClick={handleClick} style={{ cursor: 'pointer' }}>
                    <h3 className='name-firstName'>Morgan</h3>
                    <h3>Clifford</h3>
                </span>
            </div>

            <div className='navigation-row'>
                {/* Normal navigation for larger screens */}
                <div className='navigation-links'>
                    <a onClick={() => handleScroll('experience')}><h3 className='navigation-item'>Experience</h3></a>
                    <a onClick={() => handleScroll('projects')}><h3 className='navigation-item'>Projects</h3></a>
                    <a onClick={() => handleScroll('skills')}><h3 className='navigation-item'>Skills</h3></a>
                </div>

                {/* Mobile toggle button */}
                <button className='nav-toggle-button' onClick={toggleNav}>☰</button>
            </div>

            {/* Social Media Links */}
            <div className='social-links-row'>
                <a href="https://github.com/Morgan-Clifford15" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='social-icon' />
                </a>
                <a href="https://www.linkedin.com/in/morgan-clifford-b542a227a/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='social-icon' />
                </a>
            </div>

            {/* Navigation Slider for Mobile */}
            <div className={`nav-slider ${isNavActive ? 'active' : ''}`}>
                <button className='nav-back-button' onClick={toggleNav}>←</button>

                {/* Mobile Navigation Links */}
                <a onClick={() => handleScroll('about')}><h3 className='navigation-item'>About</h3></a>
                <a onClick={() => handleScroll('experience')}><h3 className='navigation-item'>Experience</h3></a>
                <a onClick={() => handleScroll('projects')}><h3 className='navigation-item'>Projects</h3></a>
                <a onClick={() => handleScroll('skills')}><h3 className='navigation-item'>Skills</h3></a>

                {/* Social Media in the Slider */}
                <div className='social-links-column'>
                    <a href="https://github.com/Morgan-Clifford15" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='social-icon' />
                    </a>
                    <a href="https://www.linkedin.com/in/morgan-clifford-b542a227a/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='social-icon' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
