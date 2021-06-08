import React from 'react';
import Label from '../atoms/label';
import TextAreaField from '../atoms/textareafield';
import './styles.css';

const TextAreaFieldUnit = ({ name, type, rows, value, handler }) => {
    return (
        <div className="form-category">
            <Label name={name}>
                <TextAreaField type={type} name={name} rows={rows} value={value} handler={handler} />
            </Label>
        </div>
    );
};

export default TextAreaFieldUnit;