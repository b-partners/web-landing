import { FC, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PdfDocument } from './CGUDocument';

export const PdfReader: FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="contact">
      <PdfDocument pdfUrl={pdfUrl} />
    </div>
  );
};
