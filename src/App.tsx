import { Navigate, Route, Routes } from 'react-router-dom';

import { About } from '@pages/About';
import { Collectivity } from '@pages/Collectivity';
import { Contact } from '@pages/Contact';
import { PdfReader } from '@pages/GCU/PdfReader';
import { Home } from '@pages/Home';
import { GlobalDialog, GlobalSnackbar } from '@/common/components';

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/craftsman" element={<Home />} />
        <Route path="/collectivity" element={<Collectivity />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/general-conditions-of-use" element={<PdfReader />} />
        <Route path="/legal-mention" element={<PdfReader pdfUrl={process.env.REACT_APP_LEGAL_MENTION_URL} />} />
        <Route path="/privacy-policy" element={<PdfReader pdfUrl={process.env.REACT_APP_PRIVACY_POLICY_URL} />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
      <GlobalDialog />
      <GlobalSnackbar />
    </>
  );
}
export default App;
