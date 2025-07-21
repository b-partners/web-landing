import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Box } from '@mui/material';
import { Analayse, Testimonials } from '@pages/home/components';

import { HeroPage, TheyTrushUs } from './sections';
import { FAQ } from './sections/FAQ';
import { FooterTemplate } from './sections/FooterTemplate';
import { RoofDiagnostics } from './sections/RoofDiagnostics';
import { TemplateGeneratorFormProvider } from './utils/template-gen-form';

interface TemplateProps {
  jsonData: any;
}

export const Template: FC<TemplateProps> = ({ jsonData }) => {
  return (
    <TemplateGeneratorFormProvider jsonData={jsonData}>
      <TemplateComponent />
    </TemplateGeneratorFormProvider>
  );
};

const TemplateComponent = () => {
  const { getValues } = useFormContext();

  return (
    <Box className="template">
      <HeroPage />
      <TheyTrushUs />
      <Analayse analayseData={getValues('analyse')} />
      <Testimonials testimonialsData={getValues('testimonials')} />
      <FAQ />
      <RoofDiagnostics />
      <FooterTemplate />
    </Box>
  );
};
