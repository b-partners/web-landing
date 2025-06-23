import { Solution } from '@/common/components/solution';
import { PALETTE_COLORS } from '@/config/theme';

import { Description } from './Description';
import { Presentation } from './Presentation';
import { Testimonials } from './Testimonials';
import image1 from './assets/images/1.webp';
import image2 from './assets/images/2.webp';
import image3 from './assets/images/3.webp';
import image4 from './assets/images/4.webp';
import image5 from './assets/images/5.webp';
import image6 from './assets/images/6.webp';
import image7 from './assets/images/7.webp';
import image8 from './assets/images/8.webp';
import image9 from './assets/images/9.webp';
import image10 from './assets/images/10.webp';
import image11 from './assets/images/11.webp';
import image12 from './assets/images/12.webp';
import image13 from './assets/images/13.webp';
import image14 from './assets/images/14.webp';
import image15 from './assets/images/15.webp';
import image16 from './assets/images/16.webp';
import image17 from './assets/images/17.webp';
import image18 from './assets/images/18.webp';

const IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
];

export const About = () => {
  return (
    <div>
      <Description />
      <div style={{ backgroundColor: PALETTE_COLORS.white, paddingBlock: '50px' }}>
        <Testimonials />
      </div>
      <Presentation />
      <Solution images={IMAGES} />
    </div>
  );
};
