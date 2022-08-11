import React from 'react';

import { Header } from './Header';
import { Feature } from './Feature';
import { HomePage } from './HomePage';
import { Pricing } from './Pricing';

export function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Feature />
      <Pricing />
    </div>
  );
}
