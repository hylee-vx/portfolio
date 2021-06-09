import React from 'react';
import FormLabel from '../atoms/formlabel';
import FormTextAreaField from '../atoms/formtextareafield';
import './formstyles.css';

const FormTextAreaFieldUnit = ({ name, type, rows, value, handler }) => {
    return (
        <div className="form-category">
            <FormLabel name={name}>
                <FormTextAreaField type={type} name={name} rows={rows} value={value} handler={handler} />
            </FormLabel>
        </div>
    );
};

export default FormTextAreaFieldUnit;