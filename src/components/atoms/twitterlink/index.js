import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../utils/fontawesome';
import useContactData from '../../../hooks/usecontactdata';

const TwitterLink = () => {
    const { twitterLink } = useContactData();
    return (
        <a href={twitterLink}>
            <FontAwesomeIcon icon={['fab', 'twitter']} title="Hyun's Twitter account" />
        </a>
    );
};

export default TwitterLink;