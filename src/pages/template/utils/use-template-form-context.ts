import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

const routeWithoutContext = [
  '/campagne-publicitaire',
  '/',
  '/couvreurs',
  '/collectivites',
  '/assurances',
  '/a-propos',
  '/conditions-generales-d-utilisation',
  '/mentions-legales',
  '/politique-de-confidentialite',
];

export const useTemplateFormContext: typeof useFormContext = () => {
  const location = useLocation();
  const isEditMode = !routeWithoutContext.includes(location.pathname);
  if (!isEditMode) return { getValues: (a: any) => undefined as any } as any;
  return useFormContext();
};
