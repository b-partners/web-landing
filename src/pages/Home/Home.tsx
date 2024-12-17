import '@/common/components/Modal/Modal.css';
import { Box } from '@mui/material';

import './assets/css/forms.css';
import './assets/css/spinner.css';
import { Distinction } from './components/Distinction/index.ts';
import { Hero } from './components/Hero/index.ts';
import { Partners } from './components/Partners/index.ts';
import { Solution } from './components/Solution/index.js';

export function Home() {
  return (
    <Box>
      <Hero />
      <Solution />
      <Distinction />
      <Partners />
    </Box>
  );
}
