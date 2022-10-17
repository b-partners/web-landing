import React from 'react'
import { Header } from '../Home/components/Home/Header';
import { Description } from './Description';
import { History } from './History';
import { Solution } from '../Home/components/Home/Solution';
import { Footer } from '../Home/components/Home/Footer';

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
