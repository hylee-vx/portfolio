import React, { useState } from 'react';
import FormTextFieldUnit from '../../molecules/formtextfieldunit';
import FormDropdownUnit from '../../molecules/Formdropdownunit';
import FormTextAreaFieldUnit from '../../molecules/formtextareafieldunit';
import Button from '../../atoms/button';
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
                <FormTextFieldUnit name='Name' type='text' value={newContact.name} handler={handleInputChange} />
                <FormTextFieldUnit name='Email' type='email' value={newContact.email} handler={handleInputChange} />
                <FormDropdownUnit name='Subject' />
                <FormTextAreaFieldUnit name='Message' type='textarea' rows='6' value={newContact.message} handler={handleInputChange} />
                <Button type='submit' value='Send' />
            </form>
        </div >
    );
};

export default ContactForm;