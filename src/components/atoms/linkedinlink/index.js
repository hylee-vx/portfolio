import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../utils/fontawesome';
import useContactData from '../../../hooks/usecontactdata';

const LinkedInLink = () => {
    const { linkedInLink } = useContactData();
    return (
        <a href={linkedInLink}>
            <FontAwesomeIcon icon={['fab', 'linkedin']} title="Hyun's LinkedIn account" />
        </a>
    );
};

export default LinkedInLink;