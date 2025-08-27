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
import aDistance from './pages/template/json-data/a-distance';
import achatBienImmobilier from './pages/template/json-data/achat-bien-immobilier';
import achatImmobilierDemandeDiagnosticToiture from './pages/template/json-data/achat-immobilier-demande-diagnostic-toiture';
import achatMaison from './pages/template/json-data/achat-maison';
import achatVieilleMaisonDiagnostic from './pages/template/json-data/achat-vieille-maison-diagnostic';
import achatVieilleMaisonDiagnosticToitureEtLaineDeVerreVente from './pages/template/json-data/achat-vieille-maison-diagnostic-toiture-et-laine-de-verre-vente';
import alloDiagnosticAmianteToiture from './pages/template/json-data/allo-diagnostic-amiante-toiture';
import amianteAvantTravauxPrix from './pages/template/json-data/amiante-avant-travaux-prix';
import apresTravauxRecouvrement from './pages/template/json-data/apres-travaux-recouvrement';
import artisanDiagnosticToiture from './pages/template/json-data/artisan-diagnostic-toiture';
import auditDiagnosticToitureCouverture from './pages/template/json-data/audit-diagnostic-toiture-couverture';
import auditToitureTechnique from './pages/template/json-data/audit-toiture-technique';
import boulogneSurMer from './pages/template/json-data/boulogne-sur-mer';
import centreDiagnosticToitureGratuit from './pages/template/json-data/centre-diagnostic-toiture-gratuit';
import charpenteLyon from './pages/template/json-data/charpente-lyon';
import charpenteToitureImmobilier from './pages/template/json-data/charpente-toiture-immobilier';
import charpenteToitureRhone from './pages/template/json-data/charpente-toiture-rhone';
import charpentierToitureDiagnostiqueTheize from './pages/template/json-data/charpentier-toiture-diagnostique-theize';
import commentAvoirUnDiagnosticAmianteSurToiture from './pages/template/json-data/comment-avoir-un-diagnostic-amiante-sur-toiture';
import compositionToiture from './pages/template/json-data/composition-toiture';
import contrLeToitureObligatoire from './pages/template/json-data/contrôle-toiture-obligatoire';
import cournonsec34660 from './pages/template/json-data/cournonsec-34660';
import courrierDiagnosticToitureFuites from './pages/template/json-data/courrier-diagnostic-toiture-fuites';
import coutDiagnosticToiture from './pages/template/json-data/cout-diagnostic-toiture';
import coutMedian from './pages/template/json-data/cout-median';
import couvreurRenovationToiture from './pages/template/json-data/couvreur-renovation-toiture';
import devisDiagnosticMarseille from './pages/template/json-data/devis-diagnostic-marseille';
import devisDiagnosticToiture from './pages/template/json-data/devis-diagnostic-toiture';
import diagnisticToitureEssonne from './pages/template/json-data/diagnistic-toiture-essonne';
import diagnostic13CapricornesToiture from './pages/template/json-data/diagnostic-13-capricornes-toiture';
import diagnosticAmianteAvantTravaux from './pages/template/json-data/diagnostic-amiante-avant-travaux';
import diagnosticAmianteFauxToiture from './pages/template/json-data/diagnostic-amiante-faux-toiture';
import diagnosticAmianteObligatoire from './pages/template/json-data/diagnostic-amiante-obligatoire';
import diagnosticAmianteToiture from './pages/template/json-data/diagnostic-amiante-toiture';
import diagnosticAmianteToitureCopropriT from './pages/template/json-data/diagnostic-amiante-toiture-copropriété';
import diagnosticAmianteToitureFibrociment from './pages/template/json-data/diagnostic-amiante-toiture-fibrociment';
import diagnosticAmianteToitureGarage from './pages/template/json-data/diagnostic-amiante-toiture-garage';
import diagnosticAmianteToitureS from './pages/template/json-data/diagnostic-amiante-toiture-s';
import diagnosticChargeToitureCharpente from './pages/template/json-data/diagnostic-charge-toiture-charpente';
import diagnosticCharpenteBrignais from './pages/template/json-data/diagnostic-charpente-brignais';
import diagnosticCharpenteP from './pages/template/json-data/diagnostic-charpente-p';
import diagnosticCharpentePrix from './pages/template/json-data/diagnostic-charpente-prix';
import diagnosticEtancheiteToitureTerrasse from './pages/template/json-data/diagnostic-etancheite-toiture-terrasse';
import diagnosticEtatToiture from './pages/template/json-data/diagnostic-etat-toiture';
import diagnosticExamenVisuel from './pages/template/json-data/diagnostic-examen-visuel';
import diagnosticFuiteToiture from './pages/template/json-data/diagnostic-fuite-toiture';
import diagnosticGratuitImmeuble from './pages/template/json-data/diagnostic-gratuit-immeuble';
import diagnosticGratuitToitureImmeuble from './pages/template/json-data/diagnostic-gratuit-toiture-immeuble';
import diagnosticImmobilierToitures from './pages/template/json-data/diagnostic-immobilier-toitures';
import diagnosticIndependantDeToiture from './pages/template/json-data/diagnostic-independant-de-toiture';
import diagnosticIndependantToiture from './pages/template/json-data/diagnostic-independant-toiture';
import diagnosticMaisonToiture from './pages/template/json-data/diagnostic-maison-toiture';
import diagnosticRhone from './pages/template/json-data/diagnostic-rhone';
import diagnosticTechniqueToiture from './pages/template/json-data/diagnostic-technique-toiture';
import diagnosticTechniqueToitureFuite from './pages/template/json-data/diagnostic-technique-toiture-fuite';
import diagnosticTechniqueToitureFuiteImmo from './pages/template/json-data/diagnostic-technique-toiture-fuite-immo';
import diagnosticTermitesToiturePrix from './pages/template/json-data/diagnostic-termites-toiture-prix';
import diagnosticToit from './pages/template/json-data/diagnostic-toit';
import diagnosticToiture from './pages/template/json-data/diagnostic-toiture';
import diagnosticToiture100m2 from './pages/template/json-data/diagnostic-toiture-100m2';
import diagnosticToitureADistance from './pages/template/json-data/diagnostic-toiture-a-distance';
import diagnosticToitureAchatMaison from './pages/template/json-data/diagnostic-toiture-achat-maison';
import diagnosticToitureAlsace from './pages/template/json-data/diagnostic-toiture-alsace';
import diagnosticToitureArdoise from './pages/template/json-data/diagnostic-toiture-ardoise';
import diagnosticToitureAvantAchat from './pages/template/json-data/diagnostic-toiture-avant-achat';
import diagnosticToitureCopropriT from './pages/template/json-data/diagnostic-toiture-copropriété';
import diagnosticToitureDrone from './pages/template/json-data/diagnostic-toiture-drone';
import diagnosticToitureEternit from './pages/template/json-data/diagnostic-toiture-eternit';
import diagnosticToitureFalaise from './pages/template/json-data/diagnostic-toiture-falaise';
import diagnosticToitureFumeeBlanche from './pages/template/json-data/diagnostic-toiture-fumee-blanche';
import diagnosticToitureGratuit from './pages/template/json-data/diagnostic-toiture-gratuit';
import diagnosticToitureIndependant from './pages/template/json-data/diagnostic-toiture-independant';
import diagnosticToitureLannion from './pages/template/json-data/diagnostic-toiture-lannion';
import diagnosticToitureLitige from './pages/template/json-data/diagnostic-toiture-litige';
import diagnosticToitureLoirEtCher from './pages/template/json-data/diagnostic-toiture-loir-et-cher';
import diagnosticToitureLyon from './pages/template/json-data/diagnostic-toiture-lyon';
import diagnosticToitureMaif from './pages/template/json-data/diagnostic-toiture-maif';
import diagnosticToitureMarseille from './pages/template/json-data/diagnostic-toiture-marseille';
import diagnosticToitureNancy from './pages/template/json-data/diagnostic-toiture-nancy';
import diagnosticToitureObligatoire from './pages/template/json-data/diagnostic-toiture-obligatoire';
import diagnosticToitureP from './pages/template/json-data/diagnostic-toiture-p';
import diagnosticToitureParis from './pages/template/json-data/diagnostic-toiture-paris';
import diagnosticToitureParticuliers from './pages/template/json-data/diagnostic-toiture-particuliers';
import diagnosticToiturePertuis from './pages/template/json-data/diagnostic-toiture-pertuis';
import diagnosticToiturePrix from './pages/template/json-data/diagnostic-toiture-prix';
import diagnosticToitureReglementation from './pages/template/json-data/diagnostic-toiture-reglementation';
import diagnosticToitureRentreTIlDansDiagnosticNergTique from './pages/template/json-data/diagnostic-toiture-rentre-t-il-dans-diagnostic-énergétique';
import diagnosticToitureRhone from './pages/template/json-data/diagnostic-toiture-rhone';
import diagnosticToitureRungis from './pages/template/json-data/diagnostic-toiture-rungis';
import diagnosticToitureTerrasse from './pages/template/json-data/diagnostic-toiture-terrasse';
import diagnosticToitureTours from './pages/template/json-data/diagnostic-toiture-tours';
import diagnosticToitureVente from './pages/template/json-data/diagnostic-toiture-vente';
import diagnosticToitureZinc from './pages/template/json-data/diagnostic-toiture-zinc';
import diagnosticToituresS from './pages/template/json-data/diagnostic-toitures-s';
import diagnostiqueToitureS from './pages/template/json-data/diagnostique-toiture-s';
import dianosticAvantVente from './pages/template/json-data/dianostic-avant-vente';
import erreurDiagnosticToiture from './pages/template/json-data/erreur-diagnostic-toiture';
import essonne from './pages/template/json-data/essonne';
import etancheiteToitureMetallique from './pages/template/json-data/etancheite-toiture-metallique';
import etatToitureAvantAchat from './pages/template/json-data/etat-toiture-avant-achat';
import etatToitureAvantVente from './pages/template/json-data/etat-toiture-avant-vente';
import evry from './pages/template/json-data/evry';
import expertEnToiture from './pages/template/json-data/expert-en-toiture';
import expertToiture from './pages/template/json-data/expert-toiture';
import expertiseToiture from './pages/template/json-data/expertise-toiture';
import faireDiagnosticToiture from './pages/template/json-data/faire-diagnostic-toiture';
import faireFaireDiagnosticIsolationToiture from './pages/template/json-data/faire-faire-diagnostic-isolation-toiture';
import feuilleDiagnosticToiture from './pages/template/json-data/feuille-diagnostic-toiture';
import fuiteReparationGouttiere from './pages/template/json-data/fuite-reparation-gouttiere';
import gratuitEtatToitureImmeuble from './pages/template/json-data/gratuit-etat-toiture-immeuble';
import ileDeFrance from './pages/template/json-data/ile-de-france';
import immobilierToiture from './pages/template/json-data/immobilier-toiture';
import indemniteAmianteToiture from './pages/template/json-data/indemnite-amiante-toiture';
import infiltrationEauSurToitureTerrasse from './pages/template/json-data/infiltration-eau-sur-toiture-terrasse';
import infiltrationEauToiture from './pages/template/json-data/infiltration-eau-toiture';
import infiltrationEauToitureTerrasse from './pages/template/json-data/infiltration-eau-toiture-terrasse';
import isolationToiture from './pages/template/json-data/isolation-toiture';
import laineDeVerre from './pages/template/json-data/laine-de-verre';
import landingPage from './pages/template/json-data/landing-page';
import loiAlur from './pages/template/json-data/loi-alur';
import marchePublicDiagnosticToiture from './pages/template/json-data/marche-public-diagnostic-toiture';
import mennecy from './pages/template/json-data/mennecy';
import methodeDiagnosticInfiltrationTerrasse from './pages/template/json-data/methode-diagnostic-infiltration-terrasse';
import obligationDiagnosticAmianteToiture from './pages/template/json-data/obligation-diagnostic-amiante-toiture';
import obligationDiagnosticFenetresPortesToiture from './pages/template/json-data/obligation-diagnostic-fenetres-portes-toiture';
import obligationDiagnosticToitureAchatMaison from './pages/template/json-data/obligation-diagnostic-toiture-achat-maison';
import paris from './pages/template/json-data/paris';
import performanceToiture from './pages/template/json-data/performance-toiture';
import periodiciteDiagnosticAmianteToiture from './pages/template/json-data/periodicite-diagnostic-amiante-toiture';
import prixDiagnosticAmianteToiture from './pages/template/json-data/prix-diagnostic-amiante-toiture';
import prixDiagnosticLoirEtCher from './pages/template/json-data/prix-diagnostic-loir-et-cher';
import prixDiagnosticToiture from './pages/template/json-data/prix-diagnostic-toiture';
import prixDiagnosticToitureLoirEtCher from './pages/template/json-data/prix-diagnostic-toiture-loir-et-cher';
import prixExpertiseToiture from './pages/template/json-data/prix-expertise-toiture';
import rapportDiagnosticToitureFuites from './pages/template/json-data/rapport-diagnostic-toiture-fuites';
import refectionDesToitures from './pages/template/json-data/refection-des-toitures';
import refectionToiture from './pages/template/json-data/refection-toiture';
import refectionToitureDef from './pages/template/json-data/refection-toiture-def';
import refectionToitureDefinition from './pages/template/json-data/refection-toiture-definition';
import refectionToitures from './pages/template/json-data/refection-toitures';
import renovationCouverture from './pages/template/json-data/renovation-couverture';
import renovationToiture from './pages/template/json-data/renovation-toiture';
import responsabiliteDiagnosticAmianteToiture from './pages/template/json-data/responsabilite-diagnostic-amiante-toiture';
import schemaToiture from './pages/template/json-data/schema-toiture';
import schMaToiture from './pages/template/json-data/schéma-toiture';
import structureToitureTremblay from './pages/template/json-data/structure-toiture-tremblay';
import techniqueToit from './pages/template/json-data/technique-toit';
import techniqueToiture from './pages/template/json-data/technique-toiture';
import toiture from './pages/template/json-data/toiture';
import toitureAmiante from './pages/template/json-data/toiture-amiante';
import toitureAthisMons from './pages/template/json-data/toiture-athis-mons';
import toitureBallanMire from './pages/template/json-data/toiture-ballan-mire';
import toitureBordeaux from './pages/template/json-data/toiture-bordeaux';
import toitureBourges from './pages/template/json-data/toiture-bourges';
import toitureCapricorne from './pages/template/json-data/toiture-capricorne';
import toitureCharpente from './pages/template/json-data/toiture-charpente';
import toitureCout from './pages/template/json-data/toiture-cout';
import toitureFibroCiment from './pages/template/json-data/toiture-fibro-ciment';
import toitureGarageAmiante from './pages/template/json-data/toiture-garage-amiante';
import toitureLabatSierra from './pages/template/json-data/toiture-labat-sierra';
import toitureNonAccessible from './pages/template/json-data/toiture-non-accessible';
import toiturePertuis from './pages/template/json-data/toiture-pertuis';
import toitureSchMa from './pages/template/json-data/toiture-schéma';
import toitureTermite from './pages/template/json-data/toiture-termite';
import toitureTravaux from './pages/template/json-data/toiture-travaux';
import travauxDeCouverture from './pages/template/json-data/travaux-de-couverture';
import travauxSurToiture from './pages/template/json-data/travaux-sur-toiture';
import verificationToiture from './pages/template/json-data/verification-toiture';
import verificationToiturePrix from './pages/template/json-data/verification-toiture-prix';
import verificationToitureTarif from './pages/template/json-data/verification-toiture-tarif';

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
          <Route path="/responsabilite-diagnostic-amiante-toiture" element={<Template jsonData={responsabiliteDiagnosticAmianteToiture} />} />
          <Route path="/prix-diagnostic-loir-et-cher" element={<Template jsonData={prixDiagnosticLoirEtCher} />} />
          <Route path="/amiante-avant-travaux-prix" element={<Template jsonData={amianteAvantTravauxPrix} />} />
          <Route path="/diagnostic-toiture-loir-et-cher" element={<Template jsonData={diagnosticToitureLoirEtCher} />} />
          <Route path="/prix-diagnostic-toiture-loir-et-cher" element={<Template jsonData={prixDiagnosticToitureLoirEtCher} />} />
          <Route path="/diagnostic-termites-toiture-prix" element={<Template jsonData={diagnosticTermitesToiturePrix} />} />
          <Route path="/diagnostic-amiante-toiture-copropriété" element={<Template jsonData={diagnosticAmianteToitureCopropriT} />} />
          <Route path="/periodicite-diagnostic-amiante-toiture" element={<Template jsonData={periodiciteDiagnosticAmianteToiture} />} />
          <Route path="/charpente-toiture-immobilier" element={<Template jsonData={charpenteToitureImmobilier} />} />
          <Route path="/diagnostic-amiante-toiture-fibrociment" element={<Template jsonData={diagnosticAmianteToitureFibrociment} />} />
          <Route path="/diagnostic-toiture-rhone" element={<Template jsonData={diagnosticToitureRhone} />} />
          <Route
            path="/diagnostic-toiture-rentre-t-il-dans-diagnostic-énergétique"
            element={<Template jsonData={diagnosticToitureRentreTIlDansDiagnosticNergTique} />}
          />
          <Route path="/faire-faire-diagnostic-isolation-toiture" element={<Template jsonData={faireFaireDiagnosticIsolationToiture} />} />
          <Route path="/comment-avoir-un-diagnostic-amiante-sur-toiture" element={<Template jsonData={commentAvoirUnDiagnosticAmianteSurToiture} />} />
          <Route path="/charpentier-toiture-diagnostique-theize" element={<Template jsonData={charpentierToitureDiagnostiqueTheize} />} />
          <Route path="/centre-diagnostic-toiture-gratuit" element={<Template jsonData={centreDiagnosticToitureGratuit} />} />
          <Route path="/obligation-diagnostic-amiante-toiture" element={<Template jsonData={obligationDiagnosticAmianteToiture} />} />
          <Route path="/obligation-diagnostic-toiture-achat-maison" element={<Template jsonData={obligationDiagnosticToitureAchatMaison} />} />
          <Route path="/obligation-diagnostic-fenetres-portes-toiture" element={<Template jsonData={obligationDiagnosticFenetresPortesToiture} />} />
          <Route path="/methode-diagnostic-infiltration-terrasse" element={<Template jsonData={methodeDiagnosticInfiltrationTerrasse} />} />
          <Route path="/marche-public-diagnostic-toiture" element={<Template jsonData={marchePublicDiagnosticToiture} />} />
          <Route path="/indemnite-amiante-toiture" element={<Template jsonData={indemniteAmianteToiture} />} />
          <Route path="/diagnostic-13-capricornes-toiture" element={<Template jsonData={diagnostic13CapricornesToiture} />} />
          <Route path="/audit-diagnostic-toiture-couverture" element={<Template jsonData={auditDiagnosticToitureCouverture} />} />
          <Route path="/allo-diagnostic-amiante-toiture" element={<Template jsonData={alloDiagnosticAmianteToiture} />} />
          <Route path="/achat-vieille-maison-diagnostic" element={<Template jsonData={achatVieilleMaisonDiagnostic} />} />
          <Route
            path="/achat-vieille-maison-diagnostic-toiture-et-laine-de-verre-vente"
            element={<Template jsonData={achatVieilleMaisonDiagnosticToitureEtLaineDeVerreVente} />}
          />
          <Route path="/diagnostic-technique-toiture-fuite" element={<Template jsonData={diagnosticTechniqueToitureFuite} />} />
          <Route path="/feuille-diagnostic-toiture" element={<Template jsonData={feuilleDiagnosticToiture} />} />
          <Route path="/faire-diagnostic-toiture" element={<Template jsonData={faireDiagnosticToiture} />} />
          <Route path="/rapport-diagnostic-toiture-fuites" element={<Template jsonData={rapportDiagnosticToitureFuites} />} />
          <Route path="/diagnostic-technique-toiture-fuite-immo" element={<Template jsonData={diagnosticTechniqueToitureFuiteImmo} />} />
          <Route path="/courrier-diagnostic-toiture-fuites" element={<Template jsonData={courrierDiagnosticToitureFuites} />} />
          <Route path="/diagnostic-toiture-reglementation" element={<Template jsonData={diagnosticToitureReglementation} />} />
          <Route path="/erreur-diagnostic-toiture" element={<Template jsonData={erreurDiagnosticToiture} />} />
          <Route path="/achat-immobilier-demande-diagnostic-toiture" element={<Template jsonData={achatImmobilierDemandeDiagnosticToiture} />} />
          <Route path="/diagnostic-toiture-vente" element={<Template jsonData={diagnosticToitureVente} />} />
          <Route path="/diagnostic-toiture-rungis" element={<Template jsonData={diagnosticToitureRungis} />} />
          <Route path="/diagnostic-toiture-tours" element={<Template jsonData={diagnosticToitureTours} />} />
          <Route path="/fuite-reparation-gouttiere" element={<Template jsonData={fuiteReparationGouttiere} />} />
          <Route path="/diagnostic-toiture-litige" element={<Template jsonData={diagnosticToitureLitige} />} />
          <Route path="/toiture-athis-mons" element={<Template jsonData={toitureAthisMons} />} />
          <Route path="/diagnostic-maison-toiture" element={<Template jsonData={diagnosticMaisonToiture} />} />
          <Route path="/diagnostic-etancheite-toiture-terrasse" element={<Template jsonData={diagnosticEtancheiteToitureTerrasse} />} />
          <Route path="/diagnostic-toitures-s" element={<Template jsonData={diagnosticToituresS} />} />
          <Route path="/diagnostic-toiture-terrasse" element={<Template jsonData={diagnosticToitureTerrasse} />} />
          <Route path="/diagnostic-amiante-toiture-s" element={<Template jsonData={diagnosticAmianteToitureS} />} />
          <Route path="/diagnostic-toiture-p" element={<Template jsonData={diagnosticToitureP} />} />
          <Route path="/diagnostic-toiture-obligatoire" element={<Template jsonData={diagnosticToitureObligatoire} />} />
          <Route path="/diagnostic-toiture-paris" element={<Template jsonData={diagnosticToitureParis} />} />
          <Route path="/diagnostic-toiture-copropriété" element={<Template jsonData={diagnosticToitureCopropriT} />} />
          <Route path="/diagnostic-toiture-eternit" element={<Template jsonData={diagnosticToitureEternit} />} />
          <Route path="/toiture-termite" element={<Template jsonData={toitureTermite} />} />
          <Route path="/renovation-couverture" element={<Template jsonData={renovationCouverture} />} />
          <Route path="/diagnostique-toiture-s" element={<Template jsonData={diagnostiqueToitureS} />} />
          <Route path="/refection-des-toitures" element={<Template jsonData={refectionDesToitures} />} />
          <Route path="/contrôle-toiture-obligatoire" element={<Template jsonData={contrLeToitureObligatoire} />} />
          <Route path="/charpente-lyon" element={<Template jsonData={charpenteLyon} />} />
          <Route path="/toiture-charpente" element={<Template jsonData={toitureCharpente} />} />
          <Route path="/laine-de-verre" element={<Template jsonData={laineDeVerre} />} />
          <Route path="/loi-alur" element={<Template jsonData={loiAlur} />} />
          <Route path="/toiture-capricorne" element={<Template jsonData={toitureCapricorne} />} />
          <Route path="/toiture-bourges" element={<Template jsonData={toitureBourges} />} />
          <Route path="/boulogne-sur-mer" element={<Template jsonData={boulogneSurMer} />} />
          <Route path="/toiture-bordeaux" element={<Template jsonData={toitureBordeaux} />} />
          <Route path="/toiture-ballan-mire" element={<Template jsonData={toitureBallanMire} />} />
          <Route path="/diagnostic-toiture-ardoise" element={<Template jsonData={diagnosticToitureArdoise} />} />
          <Route path="/diagnostic-toiture-alsace" element={<Template jsonData={diagnosticToitureAlsace} />} />
          <Route path="/achat-bien-immobilier" element={<Template jsonData={achatBienImmobilier} />} />
          <Route path="/diagnostic-toiture-prix" element={<Template jsonData={diagnosticToiturePrix} />} />
          <Route path="/diagnostic-technique-toiture" element={<Template jsonData={diagnosticTechniqueToiture} />} />
          <Route path="/diagnostic-rhone" element={<Template jsonData={diagnosticRhone} />} />
          <Route path="/performance-toiture" element={<Template jsonData={performanceToiture} />} />
          <Route path="/isolation-toiture" element={<Template jsonData={isolationToiture} />} />
          <Route path="/toiture-amiante" element={<Template jsonData={toitureAmiante} />} />
          <Route path="/toiture-pertuis" element={<Template jsonData={toiturePertuis} />} />
          <Route path="/diagnostic-toiture-pertuis" element={<Template jsonData={diagnosticToiturePertuis} />} />
          <Route path="/diagnostic-toiture-particuliers" element={<Template jsonData={diagnosticToitureParticuliers} />} />
          <Route path="/diagnostic-toiture-nancy" element={<Template jsonData={diagnosticToitureNancy} />} />
          <Route path="/diagnostic-toiture-marseille" element={<Template jsonData={diagnosticToitureMarseille} />} />
          <Route path="/diagnostic-toiture-maif" element={<Template jsonData={diagnosticToitureMaif} />} />
          <Route path="/diagnostic-toiture-lyon" element={<Template jsonData={diagnosticToitureLyon} />} />
          <Route path="/diagnostic-toiture-lannion" element={<Template jsonData={diagnosticToitureLannion} />} />
          <Route path="/technique-toiture" element={<Template jsonData={techniqueToiture} />} />
          <Route path="/refection-toiture-def" element={<Template jsonData={refectionToitureDef} />} />
          <Route path="/toiture-labat-sierra" element={<Template jsonData={toitureLabatSierra} />} />
          <Route path="/prix-expertise-toiture" element={<Template jsonData={prixExpertiseToiture} />} />
          <Route path="/diagnostic-toiture-gratuit" element={<Template jsonData={diagnosticToitureGratuit} />} />
          <Route path="/diagnostic-charpente-p" element={<Template jsonData={diagnosticCharpenteP} />} />
          <Route path="/verification-toiture-tarif" element={<Template jsonData={verificationToitureTarif} />} />
          <Route path="/diagnostic-toiture-falaise" element={<Template jsonData={diagnosticToitureFalaise} />} />
          <Route path="/diagnostic-examen-visuel" element={<Template jsonData={diagnosticExamenVisuel} />} />
          <Route path="/infiltration-eau-sur-toiture-terrasse" element={<Template jsonData={infiltrationEauSurToitureTerrasse} />} />
          <Route path="/diagnostic-toiture-independant" element={<Template jsonData={diagnosticToitureIndependant} />} />
          <Route path="/diagnostic-toiture-fumee-blanche" element={<Template jsonData={diagnosticToitureFumeeBlanche} />} />
          <Route path="/diagnostic-gratuit-immeuble" element={<Template jsonData={diagnosticGratuitImmeuble} />} />
          <Route path="/diagnostic-charpente-prix" element={<Template jsonData={diagnosticCharpentePrix} />} />
          <Route path="/verification-toiture" element={<Template jsonData={verificationToiture} />} />
          <Route path="/verification-toiture-prix" element={<Template jsonData={verificationToiturePrix} />} />
          <Route path="/infiltration-eau-toiture" element={<Template jsonData={infiltrationEauToiture} />} />
          <Route path="/infiltration-eau-toiture-terrasse" element={<Template jsonData={infiltrationEauToitureTerrasse} />} />
          <Route path="/toiture-garage-amiante" element={<Template jsonData={toitureGarageAmiante} />} />
          <Route path="/diagnostic-independant-de-toiture" element={<Template jsonData={diagnosticIndependantDeToiture} />} />
          <Route path="/diagnostic-independant-toiture" element={<Template jsonData={diagnosticIndependantToiture} />} />
          <Route path="/diagnostic-immobilier-toitures" element={<Template jsonData={diagnosticImmobilierToitures} />} />
          <Route path="/toiture-non-accessible" element={<Template jsonData={toitureNonAccessible} />} />
          <Route path="/immobilier-toiture" element={<Template jsonData={immobilierToiture} />} />
          <Route path="/diagnostic-gratuit-toiture-immeuble" element={<Template jsonData={diagnosticGratuitToitureImmeuble} />} />
          <Route path="/etat-toiture-avant-vente" element={<Template jsonData={etatToitureAvantVente} />} />
          <Route path="/gratuit-etat-toiture-immeuble" element={<Template jsonData={gratuitEtatToitureImmeuble} />} />
          <Route path="/etat-toiture-avant-achat" element={<Template jsonData={etatToitureAvantAchat} />} />
          <Route path="/diagnostic-etat-toiture" element={<Template jsonData={diagnosticEtatToiture} />} />
          <Route path="/etancheite-toiture-metallique" element={<Template jsonData={etancheiteToitureMetallique} />} />
          <Route path="/couvreur-renovation-toiture" element={<Template jsonData={couvreurRenovationToiture} />} />
          <Route path="/toiture" element={<Template jsonData={toiture} />} />
          <Route path="/diagnostic-charpente-brignais" element={<Template jsonData={diagnosticCharpenteBrignais} />} />
          <Route path="/diagnostic-toiture-zinc" element={<Template jsonData={diagnosticToitureZinc} />} />
          <Route path="/charpente-toiture-rhone" element={<Template jsonData={charpenteToitureRhone} />} />
          <Route path="/structure-toiture-tremblay" element={<Template jsonData={structureToitureTremblay} />} />
          <Route path="/schema-toiture" element={<Template jsonData={schemaToiture} />} />
          <Route path="/toiture-fibro-ciment" element={<Template jsonData={toitureFibroCiment} />} />
          <Route path="/diagnostic-amiante-toiture-garage" element={<Template jsonData={diagnosticAmianteToitureGarage} />} />
          <Route path="/diagnostic-amiante-toiture" element={<Template jsonData={diagnosticAmianteToiture} />} />
          <Route path="/diagnostic-amiante-avant-travaux" element={<Template jsonData={diagnosticAmianteAvantTravaux} />} />
          <Route path="/diagnostic-amiante-faux-toiture" element={<Template jsonData={diagnosticAmianteFauxToiture} />} />
          <Route path="/apres-travaux-recouvrement" element={<Template jsonData={apresTravauxRecouvrement} />} />
          <Route path="/refection-toiture" element={<Template jsonData={refectionToiture} />} />
          <Route path="/technique-toit" element={<Template jsonData={techniqueToit} />} />
          <Route path="/devis-diagnostic-marseille" element={<Template jsonData={devisDiagnosticMarseille} />} />
          <Route path="/devis-diagnostic-toiture" element={<Template jsonData={devisDiagnosticToiture} />} />
          <Route path="/cournonsec-34660" element={<Template jsonData={cournonsec34660} />} />
          <Route path="/dianostic-avant-vente" element={<Template jsonData={dianosticAvantVente} />} />
          <Route path="/cout-median" element={<Template jsonData={coutMedian} />} />
          <Route path="/diagnostic-toiture-100m2" element={<Template jsonData={diagnosticToiture100m2} />} />
          <Route path="/cout-diagnostic-toiture" element={<Template jsonData={coutDiagnosticToiture} />} />
          <Route path="/a-distance" element={<Template jsonData={aDistance} />} />
          <Route path="/achat-maison" element={<Template jsonData={achatMaison} />} />
          <Route path="/diagnostic-toiture-achat-maison" element={<Template jsonData={diagnosticToitureAchatMaison} />} />
          <Route path="/prix-diagnostic-amiante-toiture" element={<Template jsonData={prixDiagnosticAmianteToiture} />} />
          <Route path="/diagnostic-toiture-a-distance" element={<Template jsonData={diagnosticToitureADistance} />} />
          <Route path="/artisan-diagnostic-toiture" element={<Template jsonData={artisanDiagnosticToiture} />} />
          <Route path="/diagnostic-fuite-toiture" element={<Template jsonData={diagnosticFuiteToiture} />} />
          <Route path="/diagnostic-toiture-drone" element={<Template jsonData={diagnosticToitureDrone} />} />
          <Route path="/diagnostic-toiture-avant-achat" element={<Template jsonData={diagnosticToitureAvantAchat} />} />
          <Route path="/prix-diagnostic-toiture" element={<Template jsonData={prixDiagnosticToiture} />} />
          <Route path="/audit-toiture-technique" element={<Template jsonData={auditToitureTechnique} />} />
          <Route path="/ile-de-france" element={<Template jsonData={ileDeFrance} />} />
          <Route path="/mennecy" element={<Template jsonData={mennecy} />} />
          <Route path="/diagnostic-amiante-obligatoire" element={<Template jsonData={diagnosticAmianteObligatoire} />} />
          <Route path="/diagnostic-charge-toiture-charpente" element={<Template jsonData={diagnosticChargeToitureCharpente} />} />
          <Route path="/renovation-toiture" element={<Template jsonData={renovationToiture} />} />
          <Route path="/schéma-toiture" element={<Template jsonData={schMaToiture} />} />
          <Route path="/refection-toitures" element={<Template jsonData={refectionToitures} />} />
          <Route path="/refection-toiture-definition" element={<Template jsonData={refectionToitureDefinition} />} />
          <Route path="/diagnostic-toit" element={<Template jsonData={diagnosticToit} />} />
          <Route path="/travaux-de-couverture" element={<Template jsonData={travauxDeCouverture} />} />
          <Route path="/composition-toiture" element={<Template jsonData={compositionToiture} />} />
          <Route path="/travaux-sur-toiture" element={<Template jsonData={travauxSurToiture} />} />
          <Route path="/toiture-travaux" element={<Template jsonData={toitureTravaux} />} />
          <Route path="/toiture-schéma" element={<Template jsonData={toitureSchMa} />} />
          <Route path="/toiture-cout" element={<Template jsonData={toitureCout} />} />
          <Route path="/expert-en-toiture" element={<Template jsonData={expertEnToiture} />} />
          <Route path="/expertise-toiture" element={<Template jsonData={expertiseToiture} />} />
          <Route path="/expert-toiture" element={<Template jsonData={expertToiture} />} />
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
