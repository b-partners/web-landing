import { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export const useTemplateGeneratorForm = () => useForm();

interface TemplateGeneratorFormProvider {
  children: ReactNode;
}

export const TemplateGeneratorFormProvider: FC<TemplateGeneratorFormProvider> = ({ children }) => {
  const form = useTemplateGeneratorForm();

  console.log(form.watch());

  return <FormProvider {...form}>{children}</FormProvider>;
};
