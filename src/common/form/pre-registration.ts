import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

const preRegistrationSchema = zod.object({
  firstName: zod.string({ message: 'Ce champ est requis' }).min(1, 'Ce champ est requis'),
  lastName: zod.string({ message: 'Ce champ est requis' }).min(1, 'Ce champ est requis'),
  email: zod
    .string({ message: 'Ce champ est requis' })
    .min(1, 'Ce champ est requis')
    .email({ message: 'Adresse email invalide' }),
  phone: zod.custom((value: string) => {
    if ((value?.length || 0) > 0) {
      return 'Ce champ est requis.';
    }
    const pattern = /^\+?\d+$/;
    if (!pattern.test(value)) {
      return 'Numéro de téléphone invalide.';
    }
    return true;
  }),
  society: zod.custom(() => true),
});

const preRegistrationResolver = zodResolver(preRegistrationSchema);
type TPreRegistration = zod.infer<typeof preRegistrationSchema>;

const defaultValues: TPreRegistration = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  society: '',
};

export const usePreRegistrationForm = () =>
  useForm<TPreRegistration>({ mode: 'onSubmit', resolver: preRegistrationResolver, defaultValues });
