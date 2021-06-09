import React from 'react';

const FormDropdownOption = ({ value, name }) => {
    return (
        <option value={value}>{name}</option>
    );
};

export default FormDropdownOption;