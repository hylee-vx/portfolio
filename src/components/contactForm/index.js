import React, { useState } from 'react';
import TextField from './formElements/textField';
import Dropdown from './formElements/dropdown';
import TextareaField from './formElements/textareaField';
import Button from './formElements/button';
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
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-heading">Write to me here</h2>
                <TextField name='Name' type='text' value={newContact.name} handler={handleInputChange} />
                <TextField name='Email' type='email' value={newContact.email} handler={handleInputChange} />
                <Dropdown name='Subject' />
                <TextareaField name='Message' type='textarea' rows='6' value={newContact.message} handler={handleInputChange} />
                <Button type='submit' value='Send' />
            </form>
        </div >
    );
};

export default ContactForm;