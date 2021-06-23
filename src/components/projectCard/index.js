import React from 'react';
import ProjectSummary from './projectsummary';
import './styles.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <ProjectSummary project={project} />
            <div className="project-image-wrapper">
                <img src={project.mainImage.fluid.src} alt='project screenshot' className="project-image" />
            </div>
        </div>
    );
};

export default ProjectCard;