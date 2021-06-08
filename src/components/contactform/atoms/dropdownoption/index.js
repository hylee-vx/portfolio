import React from 'react';

const DropdownOption = ({ value, name }) => {
    return (
        <option value={value}>{name}</option>
    );
};

export default DropdownOption;