import { requiredString } from '@/common/form';
import { ZOD_ERROR_MESSAGES } from '@/common/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export const OnboardInitiationSchema = z.object({
  firstName: z.string().optional(),
  lastName: requiredString(),
  email: requiredString().email({ message: ZOD_ERROR_MESSAGES.badEmail }),
  subject: requiredString(),
  comments: requiredString(),
});
export type OnboardInitiationType = z.infer<typeof OnboardInitiationSchema>;
export const ON_BOARD_INITIATION_DEFAULT_VALUES: OnboardInitiationType = {
  comments: '',
  email: '',
  subject: '',
  lastName: '',
  firstName: '',
};
export const onboardInitiationResolver = zodResolver(OnboardInitiationSchema);
