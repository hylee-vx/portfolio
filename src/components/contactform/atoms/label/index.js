import React from 'react';

const Label = ({ name, children }) => {
    return (
        <label className="form-label">
            {name}
            {children}
        </label>
    );
};

export default Label;