import React from 'react';

const TextField = ({ type, name, value, handler }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={handler}
        />
    );
};

export default TextField;