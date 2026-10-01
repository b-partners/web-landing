import { useState } from 'react';

const CONFIRMATION_MESSAGE =
  "Votre messagerie s'ouvre avec votre demande pré-remplie : envoyez le message pour finaliser. Sinon, écrivez-nous à contact@birdia.fr.";

/**
 * Temporary lead-form submission: opens a pre-filled email to contact@birdia.fr.
 * Swap for a real CRM/form endpoint once one is available (see docs/new-pages.md).
 */
export const useMailtoFallbackForm = (subject: string) => {
  const [message, setMessage] = useState('');

  const submit = (fields: Record<string, string | undefined>) => {
    const lines = Object.entries(fields)
      .filter(([, value]) => !!value)
      .map(([key, value]) => `${key} : ${value}`);
    lines.push(`page : ${window.location.pathname}`);

    window.location.href = `mailto:contact@birdia.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    setMessage(CONFIRMATION_MESSAGE);
  };

  return { message, submit };
};
