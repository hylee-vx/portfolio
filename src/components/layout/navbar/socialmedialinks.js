import React from 'react';
import IconLink from '../../iconLink';
import useContactData from '../../../hooks/usecontactdata';
import '../../../utils/fontawesome';
import './styles.css';

const SocialMediaLinks = () => {
    const { gitHubLink, linkedInLink, twitterLink } = useContactData();
    return (
        <div className="social-media-links">
            <IconLink src={gitHubLink} icon={['fab', 'github']} title={"Hyun's GitHub account"} />
            <IconLink src={linkedInLink} icon={['fab', 'linkedin-in']} title={"Hyun's LinkedIn account"} />
            <IconLink src={twitterLink} icon={['fab', 'twitter']} title={"Hyun's Twitter account"} />
        </div>
    );
};

export default SocialMediaLinks;