import 'react-image-gallery/styles/css/image-gallery.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { GlobalDialog, GlobalSnackbar } from '@/common/components';
import { About } from '@pages/About';
import { AdvertisingCampaign } from '@pages/Advertising-Campaign';
import { Collectivity } from '@pages/Collectivity';
import { Contact } from '@pages/Contact';
import { Craftsman } from '@pages/Craftsman/Craftsman';
import { PdfReader } from '@pages/GCU/PdfReader';
import { Home } from '@pages/Home';
import { Footer } from '@pages/Home/components/Footer';
import { Header } from '@pages/Home/components/Header';
import { Insurance } from '@pages/Insurance';

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/advertising-campaign" element={<AdvertisingCampaign />} />
        <Route path="/" element={<PublicLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/craftsman" element={<Craftsman />} />
          <Route path="/collectivity" element={<Collectivity />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/general-conditions-of-use" element={<PdfReader pdfUrl={process.env.REACT_APP_CGU_URL} />} />
          <Route path="/legal-mention" element={<PdfReader pdfUrl={process.env.REACT_APP_LEGAL_MENTION_URL} />} />
          <Route path="/privacy-policy" element={<PdfReader pdfUrl={process.env.REACT_APP_PRIVACY_POLICY_URL} />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
      <GlobalDialog />
      <GlobalSnackbar />
    </>
  );
}
export default App;
