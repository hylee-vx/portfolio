import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../utils/fontawesome';
import './styles.css';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer-text">
                <span>
                    <FontAwesomeIcon icon={['far', 'copyright']} title={'copyright'} className="footer-icon" />
                </span>
                Hyun Young Lee 2021
            </p>
        </div>
    );
};

export default Footer;