import React from 'react'
import Section from '../section'
import "./hero.css"
import Button from '../Button/Button'
import Img from "../../assets/IMG_3345.jpg"
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="hero"
        >
            <div className='hero-container'>
                {/*text aligned to left */}
                <div className='text-container'>
                    <div className='text-and-button'>
                        <div>
                            <h3>Hello, I'm</h3>
                            <h1>Morgan Clifford</h1>
                            <span className='job-span'>
                                <h3>And I'm a </h3>
                                <h3 className='job-title'>Software Developer</h3>
                            </span>
                            <p>Hi! I'm Morgan Clifford, a passionate Software Developer, with interests in Fullstack Developement and mobile developement</p>
                        </div>
                        <div className='button-container'>
                            <Button children={
                                <span className="button-content">
                                    <p>Download cv</p>
                                    <FaDownload />
                                </span>
                            } />
                        </div>
                    </div>
                </div>

                <div className="image-container">
                    <div className="image-border">
                        <img src={Img} alt="Description of the image" />
                    </div>
                </div>
            </div>


        </Section>
    )
}

export default Hero
