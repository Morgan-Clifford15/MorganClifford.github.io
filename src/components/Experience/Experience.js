import React from 'react'
import Section from '../section'
import Experience_item from './Experience_item'
import './experience.css';

const Experience = () => {
    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="experience"
        >
            <div className='experience-layout'>
                <h1>Experience</h1>
                <div className='experience-items'>
                    <Experience_item></Experience_item>
                </div>

            </div>


        </Section>
    )
}

export default Experience
