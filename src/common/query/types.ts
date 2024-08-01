import { UseMutationOptions } from '@tanstack/react-query';

import { TPreRegistration } from '../form';

export type TPreRegistrationOption = Omit<
  UseMutationOptions<any, Error, TPreRegistration, unknown>,
  'mutationKey' | 'mutationFn'
>;
