import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../utils/fontawesome';
import useProjectData from '../../../hooks/useprojectdata';

const ProjectAppLink = () => {
    const { appLink } = useProjectData();
    return (
        <div>
            {appLink
                ? <a href={appLink}>
                    <FontAwesomeIcon icon={'link'} title='live app' />
                </a>
                : null}
        </div>
    );
};

export default ProjectAppLink;