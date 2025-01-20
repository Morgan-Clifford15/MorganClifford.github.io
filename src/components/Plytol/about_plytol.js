import React from 'react';
import Section from '../section';
import './about_plytol.css';
import { FaGlobe, FaGithub } from 'react-icons/fa';
import PlytolLogo from '../../assets/plytol.png'; // Assuming you have a logo image
import Project_item from '../Projects/Project_item';
import Button from '../Button/Button';
import airdeska_app from "../../assets/airdeska_app.png";
import pubgolf from "../../assets/pubgolf.png"

const AboutPlytol = () => {
    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="about-plytol"
        >
            <div className="about-plytol-container">
                {/* Company Info Section */}
                <div className="company-info">
                    <div className="company-header">
                        <img src={PlytolLogo} alt="Plytol Logo" className="company-logo" />
                        <div className="company-title">
                            <h1>Plytol</h1>
                            <h3>Software Development Company</h3>
                        </div>
                    </div>
                    <div className="company-description">
                        <p>
                            Plytol Ltd is a dedicated software development company specialising in supporting local businesses with bespoke software development and digital innovation.
                            As a co-founder and software developer, I've been instrumental in shaping both the technical direction and business strategy of the company.
                        </p>
                    </div>
                </div>

                {/* Role Description */}
                <div className="role-section">
                    <h2>My Role</h2>
                    <div className="role-content">
                        <div className="role-card">
                            <h3>Software Developer</h3>
                            <p>
                                Lead developer for multiple projects, focusing on full-stack development
                                and implementing modern technology solutions.
                            </p>
                        </div>
                        <div className="role-card">
                            <h3>Co-founder</h3>
                            <p>
                                Involved in strategic decision-making, project planning, and business development
                                from the company's inception.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="links-section">
                    <h2>Connect with Plytol</h2>
                    <div className="links-container">
                        <a href="https://plytol.co.uk/" target="_blank" rel="noopener noreferrer" className="link-card">
                            <FaGlobe className="link-icon" />
                            <div className="link-content">
                                <h3>Website</h3>
                                <p>Visit our official website</p>
                            </div>
                        </a>
                        <a href="https://github.com/plytol" target="_blank" rel="noopener noreferrer" className="link-card">
                            <FaGithub className="link-icon" />
                            <div className="link-content">
                                <h3>GitHub</h3>
                                <p>Check out our open source projects</p>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Projects Section */}
                <div className="projects-layout">
                    <h1>Projects</h1>
                    <div className="projects-items">
                        <Project_item>
                            <div className="project-content">
                                <div className="project-text">
                                    <h2>Chelt Pub Golf</h2>
                                    <p className="project-tech">React, Javascript, Firebase, AWS, MongoDb</p>
                                    <p className="project-description">
                                        Developed a React.js web application for the popular drinking game 'Pub Golf'. The app was released to the public specifically tailored around our home town of Cheltenham
                                    </p>
                                    <div className="project-buttons">
                                        <Button onClick={() => window.open('https://www.cheltpubgolf.com/', '_blank')}>Web app link</Button>
                                    </div>
                                </div>
                                <div className="project-image">
                                    <img src={pubgolf} alt="Description of the image" />
                                </div>
                            </div>
                        </Project_item>
                        <Project_item>
                            <div className="project-content">
                                <div className="project-text">
                                    <h2>AirDeska</h2>
                                    <p className="project-tech">Flutter, Dart, Javascript, AWS, MongoDb</p>
                                    <p className="project-description">
                                        Developed a cross-platform mobile application for the networking industry. Plytol worked with a client to produce the AirDeska mobile application. AirDeska is a networking app for both people and places.
                                    </p>
                                    <div className="project-buttons">
                                        <Button onClick={() => window.open('https://airdeska.co.uk/', '_blank')}>AirDeska website</Button>
                                    </div>
                                </div>
                                <div className="project-image-airdeska">
                                    <img src={airdeska_app} alt="Description of the image" />
                                </div>
                            </div>
                        </Project_item>

                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AboutPlytol;
