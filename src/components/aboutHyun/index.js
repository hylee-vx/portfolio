import React from 'react';
import useAuthorData from '../../hooks/useauthordata';
import './styles.css';

const AboutHyun = () => {
    const { mainImage, heading, bio } = useAuthorData();
    return (
        <div className="hyun-container">
            <h1 className="hyun-heading">{heading}</h1>
            <img src={mainImage.fluid.src} alt="Hyun standing on beach" className="hyun-photo" />
            <p className="hyun-bio">{bio.bio}</p>
        </div>
    );
};

export default AboutHyun;