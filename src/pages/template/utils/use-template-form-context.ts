import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

const routeWithoutContext = [
  '/campagne-publicitaire',
  '/',
  '/pour-qui',
  '/pour-qui/couvreurs',
  '/pour-qui/assureurs',
  '/pour-qui/collectivites',
  '/pour-qui/foncieres-bailleurs-gestionnaires-de-patrimoine',
  '/particuliers/diagnostic-toiture',
  '/a-propos',
  '/conditions-generales-d-utilisation',
  '/mentions-legales',
  '/politique-de-confidentialite',
];

export const useTemplateFormContext: typeof useFormContext = () => {
  const context = useFormContext();
  const location = useLocation();
  const isEditMode = !routeWithoutContext.includes(location.pathname);
  if (!isEditMode) return { getValues: () => undefined as any } as any;
  return context;
};
