import React from 'react';
import Section from '../section';
import Project_item from './Project_item';
import './projects.css';
import Button from '../Button/Button';
import Img from "../../assets/plytol.png"


const Projects = () => {
    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="projects"
        >
            <div className="projects-layout">
                <h1>Projects</h1>
                <div className="projects-items">
                    <Project_item>
                        <div className="project-content">
                            <div className="project-text">
                                <h2>Task Management App</h2>
                                <p className="project-tech">React, Javascript, Node.js, AWS, MongoDb</p>
                                <p className="project-description">
                                    Developed a react web application for small team task management using the MERN tech stack. Integrated with MongoDb for authenitcation and storage
                                </p>
                                <div className="project-buttons">
                                    <Button>Link comming soon</Button>
                                </div>
                            </div>
                            <div className="project-image">
                                <img src={Img} alt="Description of the image" />
                            </div>
                        </div>
                    </Project_item>
                    <Project_item>
                        <div className="project-content">
                            <div className="project-text">
                                <h2>Mobile Fitness App</h2>
                                <p className="project-tech">Flutter, Dart, Javascript, AWS, MongoDb</p>
                                <p className="project-description">
                                    Developed a cross-platform mobile application that enhances diet management and fitness tracking. Used Flutter framework for efficient development of the front-end, as well as node.js and MongoDb for the backend
                                </p>
                                <div className="project-buttons">
                                    <Button>Link comming soon</Button>
                                </div>
                            </div>
                            <div className="project-image">
                                <img src={Img} alt="Description of the image" />
                            </div>
                        </div>
                    </Project_item>
                    <Project_item>
                        <div className="project-content">
                            <div className="project-text">
                                <h2>Student Finance Management App</h2>
                                <p className="project-tech">Angular, Springboot, JHipster, TypeScript, Java, Postgres, </p>
                                <p className="project-description">
                                    Lead the development of a student finance management application as part of my group project at University. Used Angular and Springboot frameworks to develope a sull stack web application with multiple components. Lead team meetings and project discussions to optimise the teams performance and set out performance targets for team members
                                </p>
                                <div className="project-buttons">
                                    <Button>Link comming soon</Button>
                                </div>
                            </div>
                            <div className="project-image">
                                <img src={Img} alt="Description of the image" />
                            </div>
                        </div>
                    </Project_item>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
