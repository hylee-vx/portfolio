import React from 'react';
import useAuthorData from '../../../hooks/useauthordata';
import './styles.css';

const AboutHyun = () => {
    const { mainImage, heading, bio } = useAuthorData();
    return (
        <div>
            {/* <div className="hyun-container">
                <img src={mainImage.fluid.src} alt="Hyun standing on beach" className="hyun-photo" />
                <div className="hyun-bio">
                    <h1 className="hyun-heading">{heading}</h1>
                    <p>{bio.bio}</p>
                </div>
            </div> */}
            <h1 className="hyun-heading">{heading}</h1>
            <img src={mainImage.fluid.src} alt="Hyun standing on beach" className="hyun-photo" />
            <p>{bio.bio}</p>
        </div>
    );
};

export default AboutHyun;