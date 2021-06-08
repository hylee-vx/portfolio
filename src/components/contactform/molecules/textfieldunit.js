import React from 'react';
import Label from '../atoms/label';
import TextField from '../atoms/textfield';
import './styles.css';

const TextFieldUnit = ({ name, type, value, handler }) => {
    return (
        <div className="form-category">
            <Label name={name} >
                <TextField type={type} name={name} value={value} handler={handler} />
            </Label>
        </div>
    );
};

export default TextFieldUnit;
