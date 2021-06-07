import React, { useState } from 'react';

const ContactForm = () => {
    const [newContact, setNewContact] = useState({
        name: '',
        email: '',
        subject: '',
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
        <form onSubmit={handleSubmit}>
            <label>
                Name
            
            <input
                type='text'
                name='name'
                value={newContact.name}
                onChange={handleInputChange}
            />
            </label>
            <label>
                Email
            
            <input
                type='email'
                name='email'
                value={newContact.email}
                onChange={handleInputChange}
            />
            </label>
            <label>
                Subject
            
            <select
                name='subject'
                value={newContact.subject}
                onChange={handleInputChange}
            >
                <option value='work'>Work opportunity</option>
                <option value='probono'>Pro bono project</option>
                <option value='hello'>Just saying hello</option>
            </select>
            </label>
            <label>
                Message
            
            <textarea
                type='text'
                name='message'
                value={newContact.message}
                onChange={handleInputChange}
            />
            </label>
            <input
            type='submit'
            value='submit'
            />
        </form>
    )
};

export default ContactForm;