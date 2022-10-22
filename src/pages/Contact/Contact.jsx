import React from 'react';
import { Header } from '../Home/components/Header';
import { Footer } from '../Home/components/Footer';
import { Location } from './Location';
import { ContactForm } from './ContactForm';

export function Contact() {
    return (
        <div>
            <Header />
            <Location />
            <ContactForm />
            <Footer />
        </div>
    )
}
