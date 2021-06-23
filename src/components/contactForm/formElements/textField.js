import React from 'react';
import '../styles.css';

const TextField = ({ name, type, value, handler }) => {
    return (
        <div className="form-category">
            <label className="form-label">{name}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handler}
                required />
        </div>
    );
};

export default TextField;
