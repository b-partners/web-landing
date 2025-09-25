import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Box } from '@mui/material';
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
    <TemplateGeneratorFormProvider jsonData={jsonToEdit.value || jsonData}>
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
      <Testimonials testimonialsData={getValues('testimonials')} />
      <FAQ />
      <RoofDiagnostics />
      <FooterTemplate />
    </Box>
  );
};
