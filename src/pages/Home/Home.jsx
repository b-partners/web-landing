import React from 'react';

import { Header } from './Header';
import { Feature } from './Feature';
import { HomePage } from './HomePage';

export function Home() {
  return (
    <div>
      <Header />
      <HomePage />
      <Feature />
    </div>
  );
}
