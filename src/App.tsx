import { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { GlobalDialog, GlobalSnackbar } from '@/common/components';
import { About } from '@pages/About';
import { AdvertisingCampaign } from '@pages/Advertising-Campaign';
import { Collectivity } from '@pages/Collectivity';
import { Contact } from '@pages/Contact';
import { Craftsman } from '@pages/Craftsman/Craftsman';
import { PdfReader } from '@pages/GCU/PdfReader';
import { Footer } from '@pages/Home/components/Footer';
import { Insurance } from '@pages/Insurance';
import { Home } from '@pages/home';
import { useSnackbar } from '@store/snackbar';

import { Navbar } from './common/components/navbar';
import { PALETTE_COLORS } from './config/theme';

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const { open } = useSnackbar();

  useEffect(() => {
    open({
      type: 'success',
      message: 'Bienvenue sur BIRDIA, la nouvelle version de Bpartners !',
      alertProps: {
        sx: {
          alignItems: 'start',
          bgcolor: PALETTE_COLORS.peach,
          color: PALETTE_COLORS.white,
          fontWeight: 'bold',
          mb: 5,
          py: 2,
          fontSize: '1.1rem',
          '& .MuiSvgIcon-root': { mt: '2px' },
        },
      },
      snackbarProps: { anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, autoHideDuration: 50_000 },
    });
  }, []);

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
