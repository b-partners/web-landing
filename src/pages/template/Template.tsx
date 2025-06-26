import { Box } from '@mui/material';

import { HeroPage, TheyTrushUs } from './sections';
import { Analayse, Testimonials } from '@pages/home/components';

export function Template() {
  return (
    <Box className="template">
      <HeroPage />
      <TheyTrushUs />
      <Analayse />
      <Testimonials />
    </Box>
  );
}
