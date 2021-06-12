import React from 'react';
import Layout from '../components/organisms/layout';
import ContactDetails from '../components/organisms/contactdetails';
import ContactForm from '../components/organisms/contactform';
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