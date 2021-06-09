import React, { useState } from 'react';
import FormLabel from '../atoms/formlabel';
import FormDropdownOption from '../atoms/formdropdownoption';
import './styles.css';

const FormDropdownUnit = ({ name }) => {
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
            <FormLabel name={name}>
                <select
                    name={name}
                    value={subject}
                    onChange={event => setSubject(event.target.value)}
                >
                    {options.map(option => (
                        <FormDropdownOption key={option.value} value={option.value} name={option.label}></FormDropdownOption>
                    ))}
                </select>
            </FormLabel>
        </div>
    );
};

export default FormDropdownUnit;