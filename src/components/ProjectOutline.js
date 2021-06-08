import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../fontawesome';

const ProjectOutline = ({ project }) => {
    console.log(project);
    return (
        <div>
            <h3>{project.title}</h3>
            <img src={project.mainImage.fluid.src} alt="project screenshot" />
            <h5>{project.techStack}</h5>
            <p>{project.description.description}</p>
            <a href={project.gitHubLink}><FontAwesomeIcon icon={'code'} title='project repository on GitHub' /></a>

            {project.appLink
                ? <a href={project.appLink}>
                    <FontAwesomeIcon icon={'link'} title='project live demo' />
                </a>
                : null}
        </div>
    );
};

export default ProjectOutline;