import React, { useState } from 'react';
import Label from '../atoms/label';
// import DropdownSelect from '../atoms/dropdownselect';
import DropdownOption from '../atoms/dropdownoption';
import './styles.css';

const DropdownUnit = ({ name }) => {
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
            <Label name={name}>
                <select
                    name={name}
                    value={subject}
                    onChange={event => setSubject(event.target.value)}
                >
                    {options.map(option => (
                        <DropdownOption key={option.value} value={option.value} name={option.label}></DropdownOption>
                    ))}
                </select>
            </Label>
        </div>
    );
};

export default DropdownUnit;