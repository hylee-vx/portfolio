import React from 'react';
import '../styles.css';

const TextareaField = ({ name, type, rows, value, handler }) => {
    return (
        <div className="form-category">
            <label className="form-label">{name}</label>
            <textarea
                type={type}
                name={name}
                rows={rows}
                value={value}
                onChange={handler}
                required
            />
        </div>
    );
};

export default TextareaField;