import React from 'react';
import IconLink from '../iconLink';
import '../../utils/fontawesome';

const ProjectSummary = ({ project }) => {
    const { title, techStack, description, gitHubLink, appLink } = project;

    return (
        <div className="project-summary">
            <div className="project-header">
                <h2 className="project-title">{title}</h2>
                <div className="project-links">
                    <IconLink src={gitHubLink} icon={'code'} size={'2x'} title={'Link to code'} />
                    {appLink
                        ? <IconLink src={appLink} icon={'link'} size={'2x'} title={'Link to app'} />
                        : null}
                </div>
            </div>
            <h4>{techStack}</h4>
            <p>{description.description}</p>
        </div>
    );
};

export default ProjectSummary;