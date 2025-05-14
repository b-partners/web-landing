import { useEffect, useLayoutEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

import { GlobalDialog, GlobalSnackbar } from '@/common/components';
import { Footer } from '@/common/components/footer';
import { About } from '@pages/About';
import { AdvertisingCampaign } from '@pages/Advertising-Campaign';
import { Collectivity } from '@pages/Collectivity';
import { Contact } from '@pages/Contact';
import { Craftsman } from '@pages/Craftsman/Craftsman';
import { Insurance } from '@pages/Insurance';
import { Home } from '@pages/home';
import { useSnackbar } from '@store/snackbar';

import { Navbar } from './common/components/navbar';
import { PALETTE_COLORS } from './config/theme';

const PublicLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          py: { xs: 1, md: 2 },
          fontSize: { xs: '0.8rem', md: '1.1rem' },
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
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
      <GlobalDialog />
      <GlobalSnackbar />
    </>
  );
}
export default App;
