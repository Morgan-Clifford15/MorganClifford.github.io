import React from 'react';
import './projects.css';

const Project_item = ({
    children,
}) => {
    return (
        <div className="project-item-container">
            {children}
        </div>
    );
};

export default Project_item;
