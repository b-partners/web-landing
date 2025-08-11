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
import { PdfReader } from '@pages/GCU';
import { Insurance } from '@pages/Insurance';
import { Home } from '@pages/home';
import { Template, TemplateLogin } from '@pages/template';
import { useSnackbar } from '@store/snackbar';

import { Navbar } from './common/components/navbar';
import { Env } from './common/utils/env';
import { PALETTE_COLORS } from './config/theme';
import diagnisticToitureEssonne from './pages/template/json-data/diagnistic-toiture-essonne';
import diagnosticToiture from './pages/template/json-data/diagnostic-toiture';
import dianosticAvantVente from './pages/template/json-data/dianostic-avant-vente';
import essonne from './pages/template/json-data/essonne';
import evry from './pages/template/json-data/evry';
import landingPage from './pages/template/json-data/landing-page';
import paris from './pages/template/json-data/paris';

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
const TemplateLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
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
  }, [open]);

  return (
    <>
      <Routes>
        <Route path="/campagne-publicitaire" element={<AdvertisingCampaign />} />
        <Route path="/template/login" element={<TemplateLogin />} />
        <Route path="/" element={<PublicLayout />}>
          <Route path="/couvreurs" element={<Craftsman />} />
          <Route path="/collectivites" element={<Collectivity />} />
          <Route path="/assurances" element={<Insurance />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/conditions-generales-d-utilisation" element={<PdfReader pdfUrl={Env.REACT_APP_CGU_URL} />} />
          <Route path="/mentions-legales" element={<PdfReader pdfUrl={Env.REACT_APP_LEGAL_MENTION_URL} />} />
          <Route path="/politique-de-confidentialite" element={<PdfReader pdfUrl={Env.REACT_APP_PRIVACY_POLICY_URL} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/" element={<TemplateLayout />}>
          <Route path="/template" element={<Template jsonData={{}} />} />
          <Route path="/templateGenerator" element={<Template jsonData={paris} />} />
          <Route path="/paris" element={<Template jsonData={paris} />} />
          {/* ======== NEW TEMPLATE ROUTE REF ======== */}
          <Route path="/dianostic-avant-vente" element={<Template jsonData={dianosticAvantVente} />} />
          <Route path="/evry" element={<Template jsonData={evry} />} />
          <Route path="/essonne" element={<Template jsonData={essonne} />} />
          <Route path="/diagnistic-toiture-essonne" element={<Template jsonData={diagnisticToitureEssonne} />} />
          <Route path="/landing-page" element={<Template jsonData={landingPage} />} />
          <Route path="/diagnostic-toiture" element={<Template jsonData={diagnosticToiture} />} />
          {/* Do not remote this two comments, they are use full for template page generation */}
        </Route>
      </Routes>
      <GlobalDialog />
      <GlobalSnackbar />
    </>
  );
}
export default App;
