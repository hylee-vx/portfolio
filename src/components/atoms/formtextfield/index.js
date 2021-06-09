import React from 'react';

const FormTextField = ({ type, name, value, handler }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={handler}
            required
        />
    );
};

export default FormTextField;