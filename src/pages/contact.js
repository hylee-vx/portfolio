import React from 'react';
import Layout from '../components/layout';
import ContactDetails from '../components/contactDetails';
import ContactForm from '../components/contactForm';
import '../styles/global.css';
import './contact.css';

export default function Contact() {
    return (
        <Layout>
            <h1 className="contact-heading">Contact</h1>
            <div className="contact-container">
                <ContactForm />
                <ContactDetails />
            </div>
        </Layout>
    );
}