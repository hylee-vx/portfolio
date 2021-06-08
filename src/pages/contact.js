import React from 'react';
import Layout from '../components/Layout';
import ContactDetails from '../components/contactdetails';
import ContactForm from '../components/contactform';
import '../styles/global.css';
import './contact.css';

export default function Contact() {
    return (
        <Layout>
            <h1>Contact</h1>
            <div className="contact-container">
                <ContactDetails className="contact-details" />
                <ContactForm className="contact-form" />
            </div>
        </Layout>
    );
}