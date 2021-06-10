import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ src, icon, title }) => {
    return (
        <a href={src}>
            <FontAwesomeIcon icon={icon} title={title} />
        </a>
    );
};

export default IconLink;