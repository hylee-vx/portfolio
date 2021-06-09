import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../utils/fontawesome';
import { useContactData } from '../../../hooks/usecontactdata';

const GitHubLink = () => {
    const { gitHubLink } = useContactData();
    return (
        <a href={gitHubLink}>
            <FontAwesomeIcon icon={['fab', 'github']} title="Hyun's GitHub account" />
        </a>
    );
};

export default GitHubLink;