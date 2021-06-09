import React from 'react';
import FormLabel from '../atoms/formlabel';
import FormTextField from '../atoms/formtextfield';
import './styles.css';

const FormTextFieldUnit = ({ name, type, value, handler }) => {
    return (
        <div className="form-category">
            <FormLabel name={name} >
                <FormTextField type={type} name={name} value={value} handler={handler} />
            </FormLabel>
        </div>
    );
};

export default FormTextFieldUnit;
