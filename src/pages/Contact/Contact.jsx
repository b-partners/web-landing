import React from 'react';
import { Header } from '../Home/components/Home/Header';
import { Footer } from '../Home/components/Home/Footer';
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
