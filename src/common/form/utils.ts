import zod from 'zod';

export const ZOD_ERROR_MESSAGES = {
  required: 'Ce champ est requis',
  badPhone: 'Numéro de téléphone non valide.',
  badEmail: 'Email non valide',
};

export const requiredString = () => zod.string({ message: ZOD_ERROR_MESSAGES.required }).min(1, ZOD_ERROR_MESSAGES.required);

const validatePhoneNumber = (value: string) => /^\+?[\d\s]+$/.test(value);
export const phoneValidator = () => requiredString().refine(validatePhoneNumber, ZOD_ERROR_MESSAGES.badPhone);

export const passValidation = () => zod.custom(() => true);
