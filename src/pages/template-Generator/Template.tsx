import { Box } from '@mui/material';
import { Analayse, Testimonials } from '@pages/home/components';

import { HeroPage, TheyTrushUs } from './sections';
import { FAQ } from './sections/FAQ';
import { FooterTemplate } from './sections/FooterTemplate';
import { RoofDiagnostics } from './sections/RoofDiagnostics';

export function TemplateGenerator() {
  return (
      <Box className="template">
        <HeroPage />
        <TheyTrushUs />
        <Analayse />
        <Testimonials />
        <FAQ />
        <RoofDiagnostics />
        <FooterTemplate />
      </Box>
  );
}
