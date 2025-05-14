import { PdfDocument } from './PdfDocument';

export const PdfReader = ({ pdfUrl }) => {
  return (
    <div className="contact" style={{ margin: '100px 0px' }}>
      <PdfDocument pdfUrl={pdfUrl} />
    </div>
  );
};
