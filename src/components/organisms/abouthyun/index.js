import React from 'react';
// import AboutHyunLinks from '../../molecules/abouthyunlinks';
import useAuthorData from '../../../hooks/useauthordata';
import './styles.css';

const AboutHyun = () => {
    const { mainImage, bio } = useAuthorData();
    return (
        <div>
            <div className="hyun-container">
                <img src={mainImage.fluid.src} alt="Hyun standing on beach" className="hyun-photo" />
                <p className="hyun-bio">{bio.bio}</p>
            </div>
            {/* <AboutHyunLinks /> */}
        </div>
    );
};

export default AboutHyun;