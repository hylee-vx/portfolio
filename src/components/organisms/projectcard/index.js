import React from 'react';
import ProjectSummary from '../../molecules/projectsummary';

const ProjectCard = ({ project }) => {
    return (
        <div>
            <img src={project.mainImage.fluid.src} alt='project screenshot' />
            <ProjectSummary project={project} />
        </div>
    );
};

export default ProjectCard;