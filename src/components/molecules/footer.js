import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../utils/fontawesome';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>Made with
                <span>
                    <FontAwesomeIcon icon={'heart'} title={'heart icon'} className="footer-icon" />
                </span>
            and
                <span>
                    <FontAwesomeIcon icon={'mug-hot'} title={'hot mug icon'} className="footer-icon" />
                </span>
                by Hyun Young Lee
            </p>
        </div>
    );
};

export default Footer;