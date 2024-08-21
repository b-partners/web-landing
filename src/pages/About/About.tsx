import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Solution } from '../Home/components/Solution';
import { Description } from './Description';
import { History } from './History';

export const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Description />
      <History />
      <Solution />
    </div>
  );
};
