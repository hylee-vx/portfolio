import React, { useState } from 'react';
import '../styles.css';

const Dropdown = ({ name }) => {
    const [subject, setSubject] = useState('');
    const [options] = useState([
        {
            label: 'Work opportunity',
            value: 'work',
        },
        {
            label: 'Pro bono project',
            value: 'probono',
        },
        {
            label: 'Just saying hello',
            value: 'hello',
        },
    ]);

    return (
        <div className="form-category">
            <label className="form-label">{name}</label>
            <select
                name={name}
                value={subject}
                onChange={event => setSubject(event.target.value)}
            >
                {options.map(option => {
                    <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
};

export default Dropdown;