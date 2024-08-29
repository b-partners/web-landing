import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Solution } from '../Home/components/Solution';
import { Description } from './Description';
import { Presentation } from './Presentation';
import { Testimonials } from './Testimonials';

export const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Description />
      <Testimonials />
      <Presentation />
      <Solution />
    </div>
  );
};
