import { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const useTemplateGeneratorForm = (defaultValues: any) => useForm({ defaultValues });

interface TemplateGeneratorFormProvider {
  children: ReactNode;
  jsonData: any;
}

export const TemplateGeneratorFormProvider: FC<TemplateGeneratorFormProvider> = ({ children, jsonData }) => {
  const form = useTemplateGeneratorForm(jsonData);
  return <FormProvider {...form}>{children}</FormProvider>;
};
