import React from 'react';

import { Header } from './components/Header';
import { Feature } from './components/Feature';
import { Welcome } from './components/Welcome';
import { Pricing } from './components/Pricing';
import { Authenticity } from './components/Authenticity';

export function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Feature />
      <Authenticity />
      <Pricing />
    </div>
  );
}
