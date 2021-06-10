import React from 'react';
import IconLink from '../atoms/iconlink';
import AppLink from '../atoms/projectapplink';
import '../../utils/fontawesome';

const ProjectSummary = ({ project }) => {
    const { title, techStack, description, gitHubLink, appLink } = project;

    return (
        <div>
            <h3>{title}</h3>
            <h4>{techStack}</h4>
            <p>{description.description}</p>
            <IconLink src={gitHubLink} icon={'code'} title={'Project repository on GitHub'} />
            <AppLink src={appLink} icon={'link'} title={'Live app'} />
        </div>
    );
};

export default ProjectSummary;