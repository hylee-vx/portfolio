import React from 'react';
import './styles.css';

const Button = ({ type, value }) => {
    return (
        <input
            className='button'
            type={type}
            value={value}
        />
    );
};

export default Button;