import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

const IconLink = ({ src, icon, title, size }) => {
    return (
        <a href={src} className="contact-link">
            <FontAwesomeIcon icon={icon} title={title} size={size} className="contact-icon" />
        </a>
    );
};

export default IconLink;