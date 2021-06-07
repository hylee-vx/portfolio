import React from 'react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import '../styles/global.css';

export default function Contact() {
    return (
        <Layout>
            <h1>Contact</h1>
            <ContactForm />
        </Layout>
    );
}