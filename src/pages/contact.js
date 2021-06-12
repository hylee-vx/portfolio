import React from 'react';
import Layout from '../components/organisms/layout';
import ContactDetails from '../components/organisms/contactdetails';
import ContactForm from '../components/organisms/contactform';
import '../styles/global.css';
import './contact.css';

export default function Contact() {
    return (
        <Layout>
            <div className="contact-container">
                <ContactForm />
                <ContactDetails />
            </div>
        </Layout>
    );
}