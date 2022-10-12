import React from 'react';

import { Header } from './components/Home/Header';
import { Feature } from './components/Home/Feature';
import { Welcome } from './components/Home/Welcome';
import { Offer } from './components/Home/Offer';
import { Authenticity } from './components/Home/Authenticity';
import { Solution } from './components/Home/Solution';
import { Distinction } from './components/Home/Distinction';
import { Testimonial } from './components/Home/Testimonial';
import { GetInTouch } from './components/Home/GetInTouch';
import { Footer } from './components/Home/Footer';

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
