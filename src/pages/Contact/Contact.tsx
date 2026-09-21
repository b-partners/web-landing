import { useUpdateMeta } from '@/common/utils/use-update-meta';

import { ContactForm } from './ContactForm';
import { Location } from './Location';

export function Contact() {
  useUpdateMeta(
    'Contactez BIRDIA : parlons de votre projet de diagnostic toiture par IA',
    'Une question sur notre solution d’analyse de toitures par IA ? Contactez l’équipe BIRDIA, nous vous répondons rapidement.',
  );

  return (
    <div className="contact">
      <Location />
      <ContactForm />
    </div>
  );
}
