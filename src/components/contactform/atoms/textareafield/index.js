import React from 'react';

const TextAreaField = ({ type, name, rows, value, handler }) => {
    return (
        <textarea
            type={type}
            name={name}
            rows={rows}
            value={value}
            onChange={handler}
        />
    );
};

export default TextAreaField;