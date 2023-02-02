const translationProvider = {
  'Unable to create contact, SMS is already associated with another Contact':
  'Le contact est assigné à un autre compte ou existe déjà',
  'Contact already exist':
  'Vous êtes déjà préinscrit, en cas de question vous pouvez nous contacter à contact@bpartners.app',
  'Invalid phone number': 'Numéro de téléphone invalide',
};

const translate = (message) => translationProvider[message] || '';

export const useTranslation = () => translate;
