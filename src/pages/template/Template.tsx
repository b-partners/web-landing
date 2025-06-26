import { Box } from '@mui/material';
import { Analayse, Testimonials } from '@pages/home/components';

import { HeroPage, TheyTrushUs } from './sections';
import { FAQ } from './sections/FAQ';

export function Template() {
  return (
    <Box className="template">
      <HeroPage />
      <TheyTrushUs />
      <Analayse />
      <Testimonials />
      <FAQ />
    </Box>
  );
}
