import '@/common/components/Modal/Modal.css';
import { Box } from '@mui/material';

import './assets/css/forms.css';
import './assets/css/spinner.css';
import { Distinction } from './components/Distinction/index.js';
import { GetInTouch } from './components/GetInTouch/index.js';
import { Hero } from './components/Hero/index.ts';
import { Offer } from './components/Offer/index.js';
import { Partners } from './components/Partners/index.js';
import { Solution } from './components/Solution/index.js';
import { Testimonial } from './components/Testimonial/index.js';

export function Home() {
  return (
    <Box>
      <Hero />
      <Solution />
      <Distinction />
      <Partners />
      <Offer />
      <Testimonial />
      <GetInTouch />
    </Box>
  );
}
