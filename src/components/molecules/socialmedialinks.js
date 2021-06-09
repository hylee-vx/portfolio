import React from 'react';
import GitHubLink from '../atoms/githublink';
import LinkedInLink from '../atoms/linkedinlink';
import TwitterLink from '../atoms/twitterlink';

const SocialMediaLinks = () => {
    return (
        <div>
            <GitHubLink />
            <LinkedInLink />
            <TwitterLink />
        </div>
    );
};

export default SocialMediaLinks;