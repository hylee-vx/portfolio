import React from 'react';
import ProjectSummary from '../../molecules/projectsummary';
import './styles.css';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <img src={project.mainImage.fluid.src} alt='project screenshot' className="project-image" />
            <ProjectSummary project={project} />
        </div>
    );
};

export default ProjectCard;