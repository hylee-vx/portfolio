import React from 'react';

const FormTextAreaField = ({ type, name, rows, value, handler }) => {
    return (
        <textarea
            type={type}
            name={name}
            rows={rows}
            value={value}
            onChange={handler}
            required
        />
    );
};

export default FormTextAreaField;