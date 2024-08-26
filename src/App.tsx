import 'react-image-gallery/styles/css/image-gallery.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import { GlobalDialog, GlobalSnackbar } from '@/common/components';
import { About } from '@pages/About';
import { Collectivity } from '@pages/Collectivity';
import { Contact } from '@pages/Contact';
import { Craftsman } from '@pages/Craftsman/Craftsman';
import { PdfReader } from '@pages/GCU/PdfReader';
import { Home } from '@pages/Home';
import { Footer } from '@pages/Home/components/Footer';
import { Header } from '@pages/Home/components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/craftsman" element={<Craftsman />} />
        <Route path="/collectivity" element={<Collectivity />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/general-conditions-of-use" element={<PdfReader pdfUrl={process.env.REACT_APP_CGU_URL} />} />
        <Route path="/legal-mention" element={<PdfReader pdfUrl={process.env.REACT_APP_LEGAL_MENTION_URL} />} />
        <Route path="/privacy-policy" element={<PdfReader pdfUrl={process.env.REACT_APP_PRIVACY_POLICY_URL} />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
      <GlobalDialog />
      <GlobalSnackbar />
    </>
  );
}
export default App;
