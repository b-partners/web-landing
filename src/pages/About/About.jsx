import React from 'react';
import { Header } from '../Home/components/Header';
import { Description } from './Description';
import { History } from './History';
import { Solution } from '../Home/components/Solution';
import { Footer } from '../Home/components/Footer';

export function About() {
    return (
        <div>
            <Header />
            <Description />
            <History />
            <Solution />
            <Footer />
        </div>
    )
}
