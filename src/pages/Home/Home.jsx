import React from 'react';

import { Header } from './components/Header';
import { Feature } from './components/Feature';
import { Welcome } from './components/Welcome';
import { Offer } from './components/Offer';
import { Authenticity } from './components/Authenticity';
import { Solution } from './components/Solution';
import { Distinction } from './components/Distinction';

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
    </div>
  );
}
