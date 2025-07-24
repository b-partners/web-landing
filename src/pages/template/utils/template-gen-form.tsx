import { FC, ReactNode, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

export const useTemplateGeneratorForm = (defaultValues: any) => useForm({ defaultValues });

interface TemplateGeneratorFormProvider {
  children: ReactNode;
  jsonData: any;
}

const useCheckApiKey = () => {
  const { pathname } = useLocation();
  const [urlParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const apikey = urlParams.get('apikey');
    const isTemplatePath = pathname.includes('templateGenerator');
    if (isTemplatePath && !apikey) navigate('/template/connexion');
  }, [pathname, urlParams]);
};

export const TemplateGeneratorFormProvider: FC<TemplateGeneratorFormProvider> = ({ children, jsonData }) => {
  const form = useTemplateGeneratorForm(jsonData);
  useCheckApiKey();
  return <FormProvider {...form}>{children}</FormProvider>;
};
