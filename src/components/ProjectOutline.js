import React from 'react';

const ProjectOutline = ({ project }) => {
    console.log(project);
    return (
        <div>
            <h3>{project.title}</h3>
            <img src={project.mainImage.fluid.src} alt="project screenshot" />
            <h5>{project.techStack}</h5>
            <p>{project.description.description}</p>
            <a href={project.gitHubLink}>GitHub</a>
            <a href={project.appLink}>Live demo</a>
        </div>

    )
};

export default ProjectOutline;