import React from 'react'

const SkillItem = ({ name, icon }) => {
    return (
        <div className="skill-item">
            {icon}
            <span className="skill-name">{name}</span>
        </div>
    )
}

export default SkillItem
