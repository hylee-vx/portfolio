import React from 'react';
import '../../utils/fontawesome';
import IconLink from '../atoms/iconlink';
import useContactData from '../../hooks/usecontactdata';

const SocialMediaLinks = () => {
    const { gitHubLink, linkedInLink, twitterLink } = useContactData();
    return (
        <div className="social-media-links">
            <IconLink src={gitHubLink} icon={['fab', 'github']} title={"Hyun's GitHub account"} />
            <IconLink src={linkedInLink} icon={['fab', 'linkedin']} title={"Hyun's LinkedIn account"} />
            <IconLink src={twitterLink} icon={['fab', 'twitter']} title={"Hyun's Twitter account"} />
        </div>
    );
};

export default SocialMediaLinks;