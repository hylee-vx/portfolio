import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useAuthorData from '../../hooks/useauthordata';
import './styles.css';

const AboutHyun = () => {
    const { mainImage, heading, bio } = useAuthorData();
    const image = getImage(mainImage);

    return (
        <div className="hyun-container">
            <h1 className="hyun-heading">{heading}</h1>
            <GatsbyImage image={image} alt="laptop on desk with notebook, coffee and cat model" className="hyun-photo" />
            <p className="hyun-bio">{bio.bio}</p>
        </div>
    );
};

export default AboutHyun;