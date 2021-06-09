import React from 'react';

const FormLabel = ({ name, children }) => {
    return (
        <label className="form-label">
            {name}
            {children}
        </label>
    );
};

export default FormLabel;