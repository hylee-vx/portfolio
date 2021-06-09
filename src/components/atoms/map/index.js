import React from 'react';
import useContactData from '../../../hooks/usecontactdata';

const Map = () => {
    const { home } = useContactData();
    return (
        <img src={home.fluid.src} alt="Map of Hyun's location" />
    );
};

export default Map;