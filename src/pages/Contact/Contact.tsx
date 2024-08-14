import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { ContactForm } from './ContactForm';
import { Location } from './Location';

export function Contact() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="contact">
      <Location />
      <ContactForm />
    </div>
  );
}
