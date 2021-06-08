import React from 'react';

const Button = ({ type, value }) => {
    return (
        <input
            type={type}
            value={value}
        />
    );
};

export default Button;