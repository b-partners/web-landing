import { Navigate, Route, Routes } from 'react-router-dom';

import { GlobalDialog, GlobalSnackbar } from './common/components';
import { About } from './pages/About';
import { Collectivity } from './pages/Collectivity';
import { Contact } from './pages/Contact';
import { PdfReader } from './pages/GCU/PdfReader';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/craftsman" element={<Home />} />
        <Route exact path="/collectivity" element={<Collectivity />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/general-conditions-of-use" element={<PdfReader />} />
        <Route exact path="/legal-mention" element={<PdfReader pdfUrl={process.env.REACT_APP_LEGAL_MENTION_URL} />} />
        <Route exact path="/privacy-policy" element={<PdfReader pdfUrl={process.env.REACT_APP_PRIVACY_POLICY_URL} />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
      <GlobalDialog />
      <GlobalSnackbar />
    </>
  );
}
export default App;
