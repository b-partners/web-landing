import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Solution } from '@/common/components/solution';
import { PALETTE_COLORS } from '@/config/theme';

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
      <div style={{ backgroundColor: PALETTE_COLORS.white, paddingBlock: '50px' }}>
        <Testimonials />
      </div>
      <Presentation />
      <Solution />
    </div>
  );
};
