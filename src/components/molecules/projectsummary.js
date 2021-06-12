import React from 'react';
import IconLink from '../atoms/iconlink';
import '../../utils/fontawesome';

const ProjectSummary = ({ project }) => {
    const { title, techStack, description, gitHubLink, appLink } = project;

    return (
        <div className="project-summary">
            <h2 className="project-title">{title}</h2>
            <IconLink src={gitHubLink} icon={'code'} size={'2x'} title={'Project repository on GitHub'} />
            {appLink
                ? <IconLink src={appLink} icon={'link'} size={'2x'} title={'Live app'} />
                : null}
            <h4>{techStack}</h4>
            <p>{description.description}</p>
        </div>
    );
};

export default ProjectSummary;