import React from 'react';
import Label from '../atoms/label';
import DropdownSelect from '../atoms/dropdownselect';
import DropdownOption from '../atoms/dropdownoption';

const DropdownUnit = ({ name, value, handler }) => {
    return (
        <div className="form-category">
            <Label name={name}>
                <DropdownSelect
                    name={name}
                    value={value}
                    onChange={handler}
                >
                    <DropdownOption value='work' name='Work opportunity'></DropdownOption>
                    <DropdownOption value='probono' name='Pro bono project'></DropdownOption>
                    <DropdownOption value='hello' name='Just saying hello'></DropdownOption>
                </DropdownSelect>
            </Label>
        </div>
    );
};

export default DropdownUnit;