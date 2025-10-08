import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { PALETTE_COLORS } from '@/config/theme';
import { Box, Typography } from '@mui/material';
import { Analyse, Testimonials } from '@pages/home/components';

import { HeroPage, TheyTrustUs } from './sections';
import { FAQ } from './sections/FAQ';
import { FooterTemplate } from './sections/FooterTemplate';
import { RoofDiagnostics } from './sections/RoofDiagnostics';
import { useTemplateGenStore, useUpdateMeta } from './utils';
import { TemplateGeneratorFormProvider } from './utils/template-gen-form';

interface TemplateProps {
  jsonData: any;
}

export const Template: FC<TemplateProps> = ({ jsonData }) => {
  const { jsonToEdit } = useTemplateGenStore();

  useUpdateMeta(jsonData.metaTitle, jsonData.metaDescription);
  return (
    <TemplateGeneratorFormProvider jsonData={jsonToEdit?.value || jsonData}>
      <TemplateComponent />
    </TemplateGeneratorFormProvider>
  );
};

const TemplateComponent = () => {
  const { getValues } = useFormContext();

  return (
    <Box className="template">
      <HeroPage />
      <TheyTrustUs />
      <Analyse analyseData={getValues('analyse')} />
      {getValues('testimonial') && <Testimonials testimonialsData={getValues('testimonials')} />}
      {getValues('faq') && <FAQ />}
      {(!getValues('testimonial') || !getValues('faq')) && (
        <Box my={5} width="100%">
          <Typography
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              width: '100%',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: { xs: 3, md: 5, xl: 7 },
              color: PALETTE_COLORS.neon_orange,
            }}
          >
            Passez à l’analyse intelligente, sans complexité
          </Typography>
        </Box>
      )}
      <RoofDiagnostics />
      <FooterTemplate />
    </Box>
  );
};
