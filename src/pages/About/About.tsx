import { Solution } from '@/common/components/solution';
import { PALETTE_COLORS } from '@/config/theme';

import { Description } from './Description';
import { Presentation } from './Presentation';
import { Testimonials } from './Testimonials';

export const About = () => {
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
