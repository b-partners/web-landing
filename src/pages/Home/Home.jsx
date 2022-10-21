import React from 'react';

import { Header } from './components/Header';
import { Feature } from './components/Feature';
import { Welcome } from './components/Welcome';
import { Offer } from './components/Offer';
import { Authenticity } from './components/Authenticity';
import { Solution } from './components/Solution';
import { Distinction } from './components/Distinction';
import { Testimonial } from './components/Testimonial';
import { GetInTouch } from './components/GetInTouch';
import { Footer } from './components/Footer';

export function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Feature />
      <Authenticity />
      <Solution />
      <Distinction />
      <Offer />
      <Testimonial />
      <GetInTouch />
      <Footer />
    </div>
  );
}
