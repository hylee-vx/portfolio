import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ProjectSummary from './projectsummary';
import './styles.css';

const ProjectCard = ({ project }) => {
    const image = getImage(project.mainImage);

    return (
        <div className="project-card">
            <ProjectSummary project={project} />
            <div className="project-image-wrapper">
                <GatsbyImage image={image} alt='project screenshot' className="project-image" />
            </div>
        </div>
    );
};

export default ProjectCard;