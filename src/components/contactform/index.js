import React, { useState } from 'react';
import TextFieldUnit from './molecules/textfieldunit';
import DropdownUnit from './molecules/dropdownunit';
import TextAreaFieldUnit from './molecules/textareafieldunit';
import Button from './atoms/button';
import './styles.css';

const ContactForm = () => {
    const [newContact, setNewContact] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNewContact({ ...newContact, [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        alert('Stop spamming me, good grief');
    };

    return (
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-heading">Or write to me here</h2>
                <TextFieldUnit name='Name' type='text' value={newContact.name} handler={handleInputChange} />
                <TextFieldUnit name='Email' type='email' value={newContact.email} handler={handleInputChange} />
                <DropdownUnit name='Subject' />
                <TextAreaFieldUnit name='Message' type='textarea' rows='6' value={newContact.message} handler={handleInputChange} />
                <Button type='submit' value='Send' />
            </form>
        </div >
    );
};

export default ContactForm;