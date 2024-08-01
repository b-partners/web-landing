import { useMutation } from '@tanstack/react-query';

import axios from '@/config/axios';
import { blankToNull } from '@/utils/blankToNull';

import { TPreRegistration } from '../form';
import { TPreRegistrationOption } from './types';

export const usePreRegistrationMutation = (options: TPreRegistrationOption = {}) => {
  const mutation = useMutation({
    mutationKey: ['usePreRegistration'],
    mutationFn: async (user: TPreRegistration) => {
      const { data } = await axios.post('/preUsers', [blankToNull(user)]);
      return data;
    },
    ...options,
  });

  return mutation;
};
