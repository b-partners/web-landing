import zod from 'zod';

const errorMessages = {
  required: 'Ce champ est requis',
  badPhone: 'Numéro de téléphone invalide.',
};

export const requiredString = () => zod.string({ message: errorMessages.required }).min(1, errorMessages.required);

const validatePhoneNumber = (value: string) => /^\+?\d+$/.test(value);
export const phoneValidator = () => requiredString().refine(validatePhoneNumber, errorMessages.badPhone);

export const passValidation = () => zod.custom(() => true);
