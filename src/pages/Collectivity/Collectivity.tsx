import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Comparison } from './components/Comparison';
import { Offer } from './components/Offer';
import { Partners } from './components/Partners';
import { Solution } from './components/Solution';
import { UseCase } from './components/UseCase';

export function Collectivity() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Solution />
      <UseCase />
      <Comparison />
      <Offer />
      <Partners />
    </div>
  );
}
