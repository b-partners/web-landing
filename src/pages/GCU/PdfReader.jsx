import { useUpdateMeta } from '@/common/utils/use-update-meta';

import { PdfDocument } from './PdfDocument';

export const PdfReader = ({ pdfUrl, title, description }) => {
  useUpdateMeta(title, description);

  return (
    <div className="contact" style={{ margin: '100px 0px' }}>
      <PdfDocument pdfUrl={pdfUrl} />
    </div>
  );
};
