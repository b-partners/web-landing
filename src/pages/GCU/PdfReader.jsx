import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as PropTypes from 'prop-types';

import { Footer } from '../Home/components/Footer';
import { PdfDocument } from './CGUDocument';

export function PdfReader(props) {
  const { onEmailChange, onEmailRegistration, user, pdfUrl } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="contact">
      <PdfDocument pdfUrl={pdfUrl} />
      <Footer onEmailChange={onEmailChange} onEmailRegistration={onEmailRegistration} user={user} />
    </div>
  );
}

PdfReader.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    society: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  pdfUrl: PropTypes.string.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onEmailRegistration: PropTypes.func.isRequired,
};
