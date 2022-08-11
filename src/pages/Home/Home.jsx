import React from 'react';

import { Header } from './Header';
import { Feature } from './Feature';
import { Welcome } from './Welcome';
import { Pricing } from './Pricing';

export function Home() {
  return (
    <div>
      <Header />
      <Welcome />
      <Feature />
      <Pricing />
    </div>
  );
}
