import React, { useState } from 'react';
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaNodeJs, FaReact, FaVuejs, FaAws, FaGit, FaAngular, FaApple, FaProjectDiagram } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiDart, SiFlutter, SiJupyter, SiJetbrains, SiSpring } from 'react-icons/si';
import Section from '../section';
import SkillItem from './Skill_item';
import './skills.css';

const skillsData = [
    { name: 'Java', icon: <FaJava />, category: 'Full Stack' },
    { name: 'Python', icon: <FaPython />, category: 'Full Stack' },
    { name: 'JavaScript', icon: <FaJsSquare />, category: 'Full Stack' },
    { name: 'TypeScript', icon: <SiTypescript />, category: 'Full Stack' },
    { name: 'HTML/CSS', icon: <FaHtml5 />, category: 'Frontend' },
    { name: 'SQL', icon: <SiMysql />, category: 'Backend' },
    { name: 'Node.js', icon: <FaNodeJs />, category: 'Backend' },
    { name: 'React.js', icon: <FaReact />, category: 'Frontend' },
    { name: 'Vue.js', icon: <FaVuejs />, category: 'Frontend' },
    { name: 'Dart', icon: <SiDart />, category: 'Full Stack' },
    { name: 'AWS', icon: <FaAws />, category: 'Cloud Services' },
    { name: 'Git', icon: <FaGit />, category: 'Tools' },
    { name: 'Xcode', icon: <FaApple />, category: 'Tools' },  // Using FaApple for Xcode
    { name: 'IntelliJ', icon: <SiJetbrains />, category: 'Tools' },
    { name: 'PyCharm', icon: <SiJetbrains />, category: 'Tools' },
    { name: 'Jupyter Notebooks', icon: <SiJupyter />, category: 'Tools' },
    { name: 'Spring Boot', icon: <SiSpring />, category: 'Backend' },
    { name: 'Angular', icon: <FaAngular />, category: 'Frontend' },
    { name: 'Flutter', icon: <SiFlutter />, category: 'Full Stack' },
    { name: 'Agile', icon: <FaProjectDiagram />, category: 'Tools' },  // Using FaProjectDiagram for Agile
];

const Skills = () => {
    const categories = ['Full Stack', 'Frontend', 'Backend', 'Cloud Services', 'Tools'];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); // Default to the first category

    return (
        <Section
            className="pt-[12rem] -mt-[5.25rem]"
            crosses
            crossesOffset="lg:translate-y-[5.25rem]"
            customPaddings
            id="skills"
        >
            <div className='experience-layout'>
                <h1>Skills</h1>
                <div className='category-container'>
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>
                <div className='experience-items'>
                    {skillsData.filter(skill =>
                        selectedCategory === 'Full Stack' ?
                            ['Frontend', 'Backend'].includes(skill.category) || skill.category === 'Full Stack' :
                            skill.category === selectedCategory
                    ).map((skill, idx) => (
                        <SkillItem key={idx} name={skill.name} icon={skill.icon} />
                    ))}
                </div>
            </div>
        </Section>
    );
}

export default Skills;
