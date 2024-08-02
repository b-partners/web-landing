import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import zod from 'zod';

import { passValidation, phoneValidator, requiredString } from './utils';

const preRegistrationSchema = zod.object({
  firstName: requiredString(),
  lastName: requiredString(),
  email: requiredString().email({ message: 'Adresse email invalide' }),
  phone: phoneValidator(),
  society: passValidation(),
});

const preRegistrationResolver = zodResolver(preRegistrationSchema);
export type TPreRegistration = zod.infer<typeof preRegistrationSchema>;

const defaultValues: TPreRegistration = {
  email: '',
  firstName: '',
  lastName: '',
  phone: '',
  society: '',
};

export const usePreRegistrationForm = () => useForm<TPreRegistration>({ mode: 'onSubmit', resolver: preRegistrationResolver, defaultValues });
