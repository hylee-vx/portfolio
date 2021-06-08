import React from 'react';

const DropdownSelect = ({ name, value, handler, children }) => {
    return (
        <select
            name={name}
            value={value}
            onChange={handler}
        >
            {children}
        </select>
    );
};

export default DropdownSelect;