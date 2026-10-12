import { useLayoutEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';

import { GlobalDialog, GlobalSnackbar } from '@/common/components';
import { Footer } from '@/common/components/footer';
import { lazyNamed } from '@/common/utils/lazy-named';
import { Home } from '@pages/home';
import { TemplateLayout } from '@pages/template/TemplateLayout';

import { Navbar } from './common/components/navbar';

// Pages are split into their own chunks and loaded with their route (Home stays in the main bundle: it's the most visited page).
// No <Suspense> boundary on purpose: route changes run in a transition (see `v7_startTransition` in index.tsx), so React keeps
// the current page (or the prerendered HTML on first load) on screen until the next one is ready.
const About = lazyNamed(() => import('@pages/About'), 'About');
const AdvertisingCampaign = lazyNamed(() => import('@pages/Advertising-Campaign'), 'AdvertisingCampaign');
const BlogIndex = lazyNamed(() => import('@pages/Blog/BlogIndex'), 'BlogIndex');
const BlogPostPage = lazyNamed(() => import('@pages/Blog/BlogPostPage'), 'BlogPostPage');
const BlogTutoriels = lazyNamed(() => import('@pages/Blog/BlogTutoriels'), 'BlogTutoriels');
const Cgu = lazyNamed(() => import('@pages/Cgu'), 'Cgu');
const Collectivity = lazyNamed(() => import('@pages/Collectivity'), 'Collectivity');
const Contact = lazyNamed(() => import('@pages/Contact'), 'Contact');
const ContactDemo = lazyNamed(() => import('@pages/ContactDemo'), 'ContactDemo');
const Craftsman = lazyNamed(() => import('@pages/Craftsman/Craftsman'), 'Craftsman');
const Fonctionnalites = lazyNamed(() => import('@pages/Fonctionnalites'), 'Fonctionnalites');
const FonctionnalitesImagerieMethode = lazyNamed(() => import('@pages/FonctionnalitesImagerieMethode'), 'FonctionnalitesImagerieMethode');
const FonctionnalitesMetresMesures = lazyNamed(() => import('@pages/FonctionnalitesMetresMesures'), 'FonctionnalitesMetresMesures');
const FonctionnalitesPreDiagnostic = lazyNamed(() => import('@pages/FonctionnalitesPreDiagnostic'), 'FonctionnalitesPreDiagnostic');
const Insurance = lazyNamed(() => import('@pages/Insurance'), 'Insurance');
const LegalNotice = lazyNamed(() => import('@pages/LegalNotice'), 'LegalNotice');
const NavigationPlan = lazyNamed(() => import('@pages/Navigation-Plan'), 'NavigationPlan');
const PartnerRoofers = lazyNamed(() => import('@pages/PartnerRoofers'), 'PartnerRoofers');
const PourQui = lazyNamed(() => import('@pages/PourQui'), 'PourQui');
const Presse = lazyNamed(() => import('@pages/Presse'), 'Presse');
const Pricing = lazyNamed(() => import('@pages/Pricing'), 'Pricing');
const Privacy = lazyNamed(() => import('@pages/Privacy'), 'Privacy');
const Rebranding = lazyNamed(() => import('@pages/Rebranding'), 'Rebranding');
const Template = lazyNamed(() => import('@pages/template/Template'), 'Template');
const TemplateLogin = lazyNamed(() => import('@pages/template/TemplateLogin'), 'TemplateLogin');
const TemplateMenu = lazyNamed(() => import('@pages/template/TemplateMenu'), 'TemplateMenu');

// Template page data, loaded with its page (see `useTemplateData`). add-template-page.sh adds new entries below this marker.
// ======== NEW TEMPLATE DATA REF ========
const achatBienImmobilier = () => import('./pages/template/json-data/achat-bien-immobilier');
const achatImmobilierDemandeDiagnosticToiture = () => import('./pages/template/json-data/achat-immobilier-demande-diagnostic-toiture');
const achatMaison = () => import('./pages/template/json-data/achat-maison');
const achatVieilleMaisonDiagnostic = () => import('./pages/template/json-data/achat-vieille-maison-diagnostic');
const achatVieilleMaisonDiagnosticToitureEtLaineDeVerreVente = () =>
  import('./pages/template/json-data/achat-vieille-maison-diagnostic-toiture-et-laine-de-verre-vente');
const aDistance = () => import('./pages/template/json-data/a-distance');
const alloDiagnosticAmianteToiture = () => import('./pages/template/json-data/allo-diagnostic-amiante-toiture');
const amianteAvantTravauxPrix = () => import('./pages/template/json-data/amiante-avant-travaux-prix');
const apresTravauxRecouvrement = () => import('./pages/template/json-data/apres-travaux-recouvrement');
const artisanDiagnosticToiture = () => import('./pages/template/json-data/artisan-diagnostic-toiture');
const auditDiagnosticToitureCouverture = () => import('./pages/template/json-data/audit-diagnostic-toiture-couverture');
const auditToitureTechnique = () => import('./pages/template/json-data/audit-toiture-technique');
const boulogneSurMer = () => import('./pages/template/json-data/boulogne-sur-mer');
const centreDiagnosticToitureGratuit = () => import('./pages/template/json-data/centre-diagnostic-toiture-gratuit');
const charpenteLyon = () => import('./pages/template/json-data/charpente-lyon');
const charpenteToitureImmobilier = () => import('./pages/template/json-data/charpente-toiture-immobilier');
const charpenteToitureRhone = () => import('./pages/template/json-data/charpente-toiture-rhone');
const charpentierToitureDiagnostiqueTheize = () => import('./pages/template/json-data/charpentier-toiture-diagnostique-theize');
const commentAvoirUnDiagnosticAmianteSurToiture = () => import('./pages/template/json-data/comment-avoir-un-diagnostic-amiante-sur-toiture');
const compositionToiture = () => import('./pages/template/json-data/composition-toiture');
const contrLeToitureObligatoire = () => import('./pages/template/json-data/contrôle-toiture-obligatoire');
const cournonsec34660 = () => import('./pages/template/json-data/cournonsec-34660');
const courrierDiagnosticToitureFuites = () => import('./pages/template/json-data/courrier-diagnostic-toiture-fuites');
const coutDiagnosticToiture = () => import('./pages/template/json-data/cout-diagnostic-toiture');
const coutMedian = () => import('./pages/template/json-data/cout-median');
const couvreurRenovationToiture = () => import('./pages/template/json-data/couvreur-renovation-toiture');
const devisDiagnosticMarseille = () => import('./pages/template/json-data/devis-diagnostic-marseille');
const devisDiagnosticToiture = () => import('./pages/template/json-data/devis-diagnostic-toiture');
const diagnisticToitureEssonne = () => import('./pages/template/json-data/diagnistic-toiture-essonne');
const diagnostic13CapricornesToiture = () => import('./pages/template/json-data/diagnostic-13-capricornes-toiture');
const diagnosticAmianteAvantTravaux = () => import('./pages/template/json-data/diagnostic-amiante-avant-travaux');
const diagnosticAmianteFauxToiture = () => import('./pages/template/json-data/diagnostic-amiante-faux-toiture');
const diagnosticAmianteObligatoire = () => import('./pages/template/json-data/diagnostic-amiante-obligatoire');
const diagnosticAmianteToiture = () => import('./pages/template/json-data/diagnostic-amiante-toiture');
const diagnosticAmianteToitureCopropriT = () => import('./pages/template/json-data/diagnostic-amiante-toiture-copropriété');
const diagnosticAmianteToitureDouai = () => import('./pages/template/json-data/diagnostic-amiante-toiture-douai');
const diagnosticAmianteToitureFibrociment = () => import('./pages/template/json-data/diagnostic-amiante-toiture-fibrociment');
const diagnosticAmianteToitureGarage = () => import('./pages/template/json-data/diagnostic-amiante-toiture-garage');
const diagnosticAmianteToitureS = () => import('./pages/template/json-data/diagnostic-amiante-toiture-s');
const diagnosticAmianteToitureVente = () => import('./pages/template/json-data/diagnostic-amiante-toiture-vente');
const diagnosticAvantVente = () => import('./pages/template/json-data/diagnostic-avant-vente');
const diagnosticChargeToitureCharpente = () => import('./pages/template/json-data/diagnostic-charge-toiture-charpente');
const diagnosticCharpenteBrignais = () => import('./pages/template/json-data/diagnostic-charpente-brignais');
const diagnosticCharpenteP = () => import('./pages/template/json-data/diagnostic-charpente-p');
const diagnosticCharpentePrix = () => import('./pages/template/json-data/diagnostic-charpente-prix');
const diagnosticDesordreToitureTerrasse = () => import('./pages/template/json-data/diagnostic-desordre-toiture-terrasse');
const diagnosticEtancheiteToitureTerrasse = () => import('./pages/template/json-data/diagnostic-etancheite-toiture-terrasse');
const diagnosticEtancheiteToitureTerrasseLyon = () => import('./pages/template/json-data/diagnostic-etancheite-toiture-terrasse-lyon');
const diagnosticEtancheiteToitureTerrassePdf = () => import('./pages/template/json-data/diagnostic-etancheite-toiture-terrasse-pdf');
const diagnosticEtancheiteToitureTerrasseS = () => import('./pages/template/json-data/diagnostic-etancheite-toiture-terrasse-s');
const diagnosticEtatToiture = () => import('./pages/template/json-data/diagnostic-etat-toiture');
const diagnosticEtatToitureS = () => import('./pages/template/json-data/diagnostic-etat-toiture-s');
const diagnosticExamenVisuel = () => import('./pages/template/json-data/diagnostic-examen-visuel');
const diagnosticFuiteToiture = () => import('./pages/template/json-data/diagnostic-fuite-toiture');
const diagnosticGratuitImmeuble = () => import('./pages/template/json-data/diagnostic-gratuit-immeuble');
const diagnosticGratuitToitureImmeuble = () => import('./pages/template/json-data/diagnostic-gratuit-toiture-immeuble');
const diagnosticImmobilierInfiltrationToiture = () => import('./pages/template/json-data/diagnostic-immobilier-infiltration-toiture');
const diagnosticImmobilierToitureFibrociment = () => import('./pages/template/json-data/diagnostic-immobilier-toiture-fibrociment');
const diagnosticImmobilierToitures = () => import('./pages/template/json-data/diagnostic-immobilier-toitures');
const diagnosticIndependantDeToiture = () => import('./pages/template/json-data/diagnostic-independant-de-toiture');
const diagnosticIndependantToiture = () => import('./pages/template/json-data/diagnostic-independant-toiture');
const diagnosticInfiltrationToiture = () => import('./pages/template/json-data/diagnostic-infiltration-toiture');
const diagnosticMaisonToiture = () => import('./pages/template/json-data/diagnostic-maison-toiture');
const diagnosticPlombToitureTravaux = () => import('./pages/template/json-data/diagnostic-plomb-toiture-travaux');
const diagnosticRhone = () => import('./pages/template/json-data/diagnostic-rhone');
const diagnosticsAmianteToitureS = () => import('./pages/template/json-data/diagnostics-amiante-toiture-s');
const diagnosticsImobiliersAmianteToiture = () => import('./pages/template/json-data/diagnostics-imobiliers-amiante-toiture');
const diagnosticsToitureS = () => import('./pages/template/json-data/diagnostics-toiture-s');
const diagnosticTacnItToitureTerrassePdf = () => import('./pages/template/json-data/diagnostic-étacnéité-toiture-terrasse-pdf');
const diagnosticTanchItToitureDrone = () => import('./pages/template/json-data/diagnostic-étanchéité-toiture-drone');
const diagnosticTanchItToitureS = () => import('./pages/template/json-data/diagnostic-étanchéité-toiture-s');
const diagnosticTechniqueToiture = () => import('./pages/template/json-data/diagnostic-technique-toiture');
const diagnosticTechniqueToitureFuite = () => import('./pages/template/json-data/diagnostic-technique-toiture-fuite');
const diagnosticTechniqueToitureFuiteImmo = () => import('./pages/template/json-data/diagnostic-technique-toiture-fuite-immo');
const diagnosticTermitesToiturePrix = () => import('./pages/template/json-data/diagnostic-termites-toiture-prix');
const diagnosticToit = () => import('./pages/template/json-data/diagnostic-toit');
const diagnosticToiture = () => import('./pages/template/json-data/diagnostic-toiture');
const diagnosticToiture100m2 = () => import('./pages/template/json-data/diagnostic-toiture-100m2');
const diagnosticToitureAchatMaison = () => import('./pages/template/json-data/diagnostic-toiture-achat-maison');
const diagnosticToitureADistance = () => import('./pages/template/json-data/diagnostic-toiture-a-distance');
const diagnosticToitureAlsace = () => import('./pages/template/json-data/diagnostic-toiture-alsace');
const diagnosticToitureArdoise = () => import('./pages/template/json-data/diagnostic-toiture-ardoise');
const diagnosticToitureArdoiseS = () => import('./pages/template/json-data/diagnostic-toiture-ardoise-s');
const diagnosticToitureAvantAchat = () => import('./pages/template/json-data/diagnostic-toiture-avant-achat');
const diagnosticToitureCopropriT = () => import('./pages/template/json-data/diagnostic-toiture-copropriété');
const diagnosticToitureDrone = () => import('./pages/template/json-data/diagnostic-toiture-drone');
const diagnosticToitureEternit = () => import('./pages/template/json-data/diagnostic-toiture-eternit');
const diagnosticToitureFalaise = () => import('./pages/template/json-data/diagnostic-toiture-falaise');
const diagnosticToitureFumeeBlanche = () => import('./pages/template/json-data/diagnostic-toiture-fumee-blanche');
const diagnosticToitureGratuit = () => import('./pages/template/json-data/diagnostic-toiture-gratuit');
const diagnosticToitureIndependant = () => import('./pages/template/json-data/diagnostic-toiture-independant');
const diagnosticToitureLannion = () => import('./pages/template/json-data/diagnostic-toiture-lannion');
const diagnosticToitureLitige = () => import('./pages/template/json-data/diagnostic-toiture-litige');
const diagnosticToitureLoirEtCher = () => import('./pages/template/json-data/diagnostic-toiture-loir-et-cher');
const diagnosticToitureLyon = () => import('./pages/template/json-data/diagnostic-toiture-lyon');
const diagnosticToitureMaif = () => import('./pages/template/json-data/diagnostic-toiture-maif');
const diagnosticToitureMarseille = () => import('./pages/template/json-data/diagnostic-toiture-marseille');
const diagnosticToitureNancy = () => import('./pages/template/json-data/diagnostic-toiture-nancy');
const diagnosticToitureObligatoire = () => import('./pages/template/json-data/diagnostic-toiture-obligatoire');
const diagnosticToitureP = () => import('./pages/template/json-data/diagnostic-toiture-p');
const diagnosticToitureParis = () => import('./pages/template/json-data/diagnostic-toiture-paris');
const diagnosticToitureParticulier = () => import('./pages/template/json-data/diagnostic-toiture-particulier');
const diagnosticToitureParticuliers = () => import('./pages/template/json-data/diagnostic-toiture-particuliers');
const diagnosticToiturePertuis = () => import('./pages/template/json-data/diagnostic-toiture-pertuis');
const diagnosticToiturePrix = () => import('./pages/template/json-data/diagnostic-toiture-prix');
const diagnosticToitureRaquinDuchon = () => import('./pages/template/json-data/diagnostic-toiture-raquin-duchon');
const diagnosticToitureReglementation = () => import('./pages/template/json-data/diagnostic-toiture-reglementation');
const diagnosticToitureRentreTIlDansDiagnosticNergTique = () => import('./pages/template/json-data/diagnostic-toiture-rentre-t-il-dans-diagnostic-énergétique');
const diagnosticToitureRhone = () => import('./pages/template/json-data/diagnostic-toiture-rhone');
const diagnosticToitureRungis = () => import('./pages/template/json-data/diagnostic-toiture-rungis');
const diagnosticToitureSeineEtMarne = () => import('./pages/template/json-data/diagnostic-toiture-seine-et-marne');
const diagnosticToitureSigean = () => import('./pages/template/json-data/diagnostic-toiture-sigean');
const diagnosticToituresS = () => import('./pages/template/json-data/diagnostic-toitures-s');
const diagnosticToitureTarif = () => import('./pages/template/json-data/diagnostic-toiture-tarif');
const diagnosticToitureTerrasse = () => import('./pages/template/json-data/diagnostic-toiture-terrasse');
const diagnosticToitureTerrasseBTimentIndustriel = () => import('./pages/template/json-data/diagnostic-toiture-terrasse-bâtiment-industriel');
const diagnosticToitureTerrasseDtu433 = () => import('./pages/template/json-data/diagnostic-toiture-terrasse-dtu-43.3');
const diagnosticToitureTerrassePdf = () => import('./pages/template/json-data/diagnostic-toiture-terrasse-pdf');
const diagnosticToitureToulouse = () => import('./pages/template/json-data/diagnostic-toiture-toulouse');
const diagnosticToitureTours = () => import('./pages/template/json-data/diagnostic-toiture-tours');
const diagnosticToitureTours37 = () => import('./pages/template/json-data/diagnostic-toiture-tours-37');
const diagnosticToitureVente = () => import('./pages/template/json-data/diagnostic-toiture-vente');
const diagnosticToitureVenteMaison = () => import('./pages/template/json-data/diagnostic-toiture-vente-maison');
const diagnosticToitureViceCach = () => import('./pages/template/json-data/diagnostic-toiture-vice-caché');
const diagnosticToitureZinc = () => import('./pages/template/json-data/diagnostic-toiture-zinc');
const diagnostiqueToitureS = () => import('./pages/template/json-data/diagnostique-toiture-s');
const dignosticToitureTerrasseS = () => import('./pages/template/json-data/dignostic-toiture-terrasse-s');
const erreurDiagnosticToiture = () => import('./pages/template/json-data/erreur-diagnostic-toiture');
const essonne = () => import('./pages/template/json-data/essonne');
const etancheiteToitureMetallique = () => import('./pages/template/json-data/etancheite-toiture-metallique');
const etatToitureAvantAchat = () => import('./pages/template/json-data/etat-toiture-avant-achat');
const etatToitureAvantVente = () => import('./pages/template/json-data/etat-toiture-avant-vente');
const evry = () => import('./pages/template/json-data/evry');
const expertEnToiture = () => import('./pages/template/json-data/expert-en-toiture');
const expertiseToiture = () => import('./pages/template/json-data/expertise-toiture');
const expertToiture = () => import('./pages/template/json-data/expert-toiture');
const faireDiagnosticToiture = () => import('./pages/template/json-data/faire-diagnostic-toiture');
const faireFaireDiagnosticIsolationToiture = () => import('./pages/template/json-data/faire-faire-diagnostic-isolation-toiture');
const feuilleDiagnosticToiture = () => import('./pages/template/json-data/feuille-diagnostic-toiture');
const fuiteReparationGouttiere = () => import('./pages/template/json-data/fuite-reparation-gouttiere');
const gratuitEtatToitureImmeuble = () => import('./pages/template/json-data/gratuit-etat-toiture-immeuble');
const ileDeFrance = () => import('./pages/template/json-data/ile-de-france');
const immobilierToiture = () => import('./pages/template/json-data/immobilier-toiture');
const indemniteAmianteToiture = () => import('./pages/template/json-data/indemnite-amiante-toiture');
const infiltrationEauSurToitureTerrasse = () => import('./pages/template/json-data/infiltration-eau-sur-toiture-terrasse');
const infiltrationEauToiture = () => import('./pages/template/json-data/infiltration-eau-toiture');
const infiltrationEauToitureTerrasse = () => import('./pages/template/json-data/infiltration-eau-toiture-terrasse');
const isolationToiture = () => import('./pages/template/json-data/isolation-toiture');
const laineDeVerre = () => import('./pages/template/json-data/laine-de-verre');
const landingPage = () => import('./pages/template/json-data/landing-page');
const loiAlur = () => import('./pages/template/json-data/loi-alur');
const marchePublicDiagnosticToiture = () => import('./pages/template/json-data/marche-public-diagnostic-toiture');
const mennecy = () => import('./pages/template/json-data/mennecy');
const methodeDiagnosticInfiltrationTerrasse = () => import('./pages/template/json-data/methode-diagnostic-infiltration-terrasse');
const obligationDiagnosticAmianteToiture = () => import('./pages/template/json-data/obligation-diagnostic-amiante-toiture');
const obligationDiagnosticFenetresPortesToiture = () => import('./pages/template/json-data/obligation-diagnostic-fenetres-portes-toiture');
const obligationDiagnosticToitureAchatMaison = () => import('./pages/template/json-data/obligation-diagnostic-toiture-achat-maison');
const paris = () => import('./pages/template/json-data/paris');
const performanceToiture = () => import('./pages/template/json-data/performance-toiture');
const periodiciteDiagnosticAmianteToiture = () => import('./pages/template/json-data/periodicite-diagnostic-amiante-toiture');
const prixDiagnosticAmianteToiture = () => import('./pages/template/json-data/prix-diagnostic-amiante-toiture');
const prixDiagnosticLoirEtCher = () => import('./pages/template/json-data/prix-diagnostic-loir-et-cher');
const prixDiagnosticToiture = () => import('./pages/template/json-data/prix-diagnostic-toiture');
const prixDiagnosticToitureLoirEtCher = () => import('./pages/template/json-data/prix-diagnostic-toiture-loir-et-cher');
const prixExpertiseToiture = () => import('./pages/template/json-data/prix-expertise-toiture');
const rapportDiagnosticToiture = () => import('./pages/template/json-data/rapport-diagnostic-toiture');
const rapportDiagnosticToitureFuites = () => import('./pages/template/json-data/rapport-diagnostic-toiture-fuites');
const refectionDesToitures = () => import('./pages/template/json-data/refection-des-toitures');
const refectionToiture = () => import('./pages/template/json-data/refection-toiture');
const refectionToitureDef = () => import('./pages/template/json-data/refection-toiture-def');
const refectionToitureDefinition = () => import('./pages/template/json-data/refection-toiture-definition');
const refectionToitures = () => import('./pages/template/json-data/refection-toitures');
const renovationCouverture = () => import('./pages/template/json-data/renovation-couverture');
const renovationToiture = () => import('./pages/template/json-data/renovation-toiture');
const responsabiliteDiagnosticAmianteToiture = () => import('./pages/template/json-data/responsabilite-diagnostic-amiante-toiture');
const schemaToiture = () => import('./pages/template/json-data/schema-toiture');
const schMaToiture = () => import('./pages/template/json-data/schéma-toiture');
const societeDiagnosticAmianteToiture = () => import('./pages/template/json-data/societe-diagnostic-amiante-toiture');
const structureToitureTremblay = () => import('./pages/template/json-data/structure-toiture-tremblay');
const techniqueToit = () => import('./pages/template/json-data/technique-toit');
const techniqueToiture = () => import('./pages/template/json-data/technique-toiture');
const toiture = () => import('./pages/template/json-data/toiture');
const toitureAmiante = () => import('./pages/template/json-data/toiture-amiante');
const toitureAthisMons = () => import('./pages/template/json-data/toiture-athis-mons');
const toitureBallanMire = () => import('./pages/template/json-data/toiture-ballan-mire');
const toitureBordeaux = () => import('./pages/template/json-data/toiture-bordeaux');
const toitureBourges = () => import('./pages/template/json-data/toiture-bourges');
const toitureCapricorne = () => import('./pages/template/json-data/toiture-capricorne');
const toitureCharpente = () => import('./pages/template/json-data/toiture-charpente');
const toitureCout = () => import('./pages/template/json-data/toiture-cout');
const toitureFibroCiment = () => import('./pages/template/json-data/toiture-fibro-ciment');
const toitureGarageAmiante = () => import('./pages/template/json-data/toiture-garage-amiante');
const toitureLabatSierra = () => import('./pages/template/json-data/toiture-labat-sierra');
const toitureNonAccessible = () => import('./pages/template/json-data/toiture-non-accessible');
const toiturePertuis = () => import('./pages/template/json-data/toiture-pertuis');
const toitureSchMa = () => import('./pages/template/json-data/toiture-schéma');
const toitureTermite = () => import('./pages/template/json-data/toiture-termite');
const toitureTravaux = () => import('./pages/template/json-data/toiture-travaux');
const travauxDeCouverture = () => import('./pages/template/json-data/travaux-de-couverture');
const travauxSurToiture = () => import('./pages/template/json-data/travaux-sur-toiture');
const validiteDiagnosticAmianteToitureGarage = () => import('./pages/template/json-data/validite-diagnostic-amiante-toiture-garage');
const verificationToiture = () => import('./pages/template/json-data/verification-toiture');
const verificationToiturePrix = () => import('./pages/template/json-data/verification-toiture-prix');
const verificationToitureTarif = () => import('./pages/template/json-data/verification-toiture-tarif');

const PublicLayout = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <div className="page-overflow-guard">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/campagne-publicitaire" element={<AdvertisingCampaign />} />
        <Route path="/template/login" element={<TemplateLogin />} />
        <Route path="/template/menu" element={<TemplateMenu />} />
        <Route path="/" element={<PublicLayout />}>
          <Route path="/plan-du-site-navigation" element={<NavigationPlan />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/tutoriels" element={<BlogTutoriels />} />
          <Route path="/blog/post/:slug" element={<BlogPostPage />} />
          <Route path="/pour-qui" element={<PourQui />} />
          <Route path="/pour-qui/couvreurs" element={<Craftsman />} />
          <Route path="/pour-qui/assureurs" element={<Insurance />} />
          <Route path="/pour-qui/collectivites" element={<Collectivity />} />
          <Route path="/fonctionnalites" element={<Fonctionnalites />} />
          <Route path="/fonctionnalites/metre-et-mesures" element={<FonctionnalitesMetresMesures />} />
          <Route path="/fonctionnalites/pre-diagnostic-et-etat-de-la-toiture" element={<FonctionnalitesPreDiagnostic />} />
          <Route path="/fonctionnalites/donnees-imagerie-et-methode" element={<FonctionnalitesImagerieMethode />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-demo" element={<ContactDemo />} />
          <Route path="/bpartners-devient-birdia" element={<Rebranding />} />
          <Route path="/presse" element={<Presse />} />
          <Route path="/partenaires-couvreurs" element={<PartnerRoofers />} />
          <Route path="/tarifs" element={<Pricing />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/cgu" element={<Cgu />} />
          <Route path="/conditions-generales-d-utilisation" element={<Navigate to="/cgu" replace />} />
          <Route path="/confidentialite" element={<Privacy />} />
          <Route path="/politique-de-confidentialite" element={<Navigate to="/confidentialite" replace />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/" element={<TemplateLayout />}>
          <Route path="/template" element={<Template jsonData={{}} />} />
          <Route path="/templateGenerator" element={<Template jsonData={paris} />} />
          <Route path="/paris" element={<Template jsonData={paris} />} />
          {/* ======== NEW TEMPLATE ROUTE REF ======== */}
          <Route path="/diagnostics-toiture-s" element={<Template jsonData={diagnosticsToitureS} />} />
          <Route path="/diagnostics-imobiliers-amiante-toiture" element={<Template jsonData={diagnosticsImobiliersAmianteToiture} />} />
          <Route path="/diagnostics-amiante-toiture-s" element={<Template jsonData={diagnosticsAmianteToitureS} />} />
          <Route path="/diagnostic-etat-toiture-s" element={<Template jsonData={diagnosticEtatToitureS} />} />
          <Route path="/diagnostic-etancheite-toiture-terrasse-s" element={<Template jsonData={diagnosticEtancheiteToitureTerrasseS} />} />
          <Route path="/diagnostic-etancheite-toiture-terrasse-pdf" element={<Template jsonData={diagnosticEtancheiteToitureTerrassePdf} />} />
          <Route path="/diagnostic-etancheite-toiture-terrasse-lyon" element={<Template jsonData={diagnosticEtancheiteToitureTerrasseLyon} />} />
          <Route path="/diagnostic-étanchéité-toiture-drone" element={<Template jsonData={diagnosticTanchItToitureDrone} />} />
          <Route path="/diagnostic-étanchéité-toiture-s" element={<Template jsonData={diagnosticTanchItToitureS} />} />
          <Route path="/diagnostic-étacnéité-toiture-terrasse-pdf" element={<Template jsonData={diagnosticTacnItToitureTerrassePdf} />} />
          <Route path="/dignostic-toiture-terrasse-s" element={<Template jsonData={dignosticToitureTerrasseS} />} />
          <Route path="/diagnostic-toiture-ardoise-s" element={<Template jsonData={diagnosticToitureArdoiseS} />} />
          <Route path="/diagnostic-toiture-vice-caché" element={<Template jsonData={diagnosticToitureViceCach} />} />
          <Route path="/diagnostic-toiture-tours-37" element={<Template jsonData={diagnosticToitureTours37} />} />
          <Route path="/diagnostic-toiture-toulouse" element={<Template jsonData={diagnosticToitureToulouse} />} />
          <Route path="/diagnostic-toiture-terrasse-pdf" element={<Template jsonData={diagnosticToitureTerrassePdf} />} />
          <Route path="/diagnostic-toiture-terrasse-dtu-43.3" element={<Template jsonData={diagnosticToitureTerrasseDtu433} />} />
          <Route path="/diagnostic-toiture-terrasse-dtu-43" element={<Template jsonData={diagnosticToitureTerrasseDtu433} />} />
          <Route path="/diagnostic-toiture-terrasse-bâtiment-industriel" element={<Template jsonData={diagnosticToitureTerrasseBTimentIndustriel} />} />
          <Route path="/diagnostic-amiante-toiture-vente" element={<Template jsonData={diagnosticAmianteToitureVente} />} />
          <Route path="/diagnostic-toiture-vente-maison" element={<Template jsonData={diagnosticToitureVenteMaison} />} />
          <Route path="/validite-diagnostic-amiante-toiture-garage" element={<Template jsonData={validiteDiagnosticAmianteToitureGarage} />} />
          <Route path="/diagnostic-plomb-toiture-travaux" element={<Template jsonData={diagnosticPlombToitureTravaux} />} />
          <Route path="/diagnostic-immobilier-infiltration-toiture" element={<Template jsonData={diagnosticImmobilierInfiltrationToiture} />} />
          <Route path="/diagnostic-infiltration-toiture" element={<Template jsonData={diagnosticInfiltrationToiture} />} />
          <Route path="/diagnostic-toiture-tarif" element={<Template jsonData={diagnosticToitureTarif} />} />
          <Route path="/diagnostic-toiture-sigean" element={<Template jsonData={diagnosticToitureSigean} />} />
          <Route path="/diagnostic-toiture-seine-et-marne" element={<Template jsonData={diagnosticToitureSeineEtMarne} />} />
          <Route path="/diagnostic-immobilier-toiture-fibrociment" element={<Template jsonData={diagnosticImmobilierToitureFibrociment} />} />
          <Route path="/diagnostic-desordre-toiture-terrasse" element={<Template jsonData={diagnosticDesordreToitureTerrasse} />} />
          <Route path="/responsabilite-diagnostic-amiante-toiture" element={<Template jsonData={responsabiliteDiagnosticAmianteToiture} />} />
          <Route path="/diagnostic-amiante-toiture-douai" element={<Template jsonData={diagnosticAmianteToitureDouai} />} />
          <Route path="/societe-diagnostic-amiante-toiture" element={<Template jsonData={societeDiagnosticAmianteToiture} />} />
          <Route path="/diagnostic-toiture-raquin-duchon" element={<Template jsonData={diagnosticToitureRaquinDuchon} />} />
          <Route path="/rapport-diagnostic-toiture" element={<Template jsonData={rapportDiagnosticToiture} />} />
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
          <Route path="/diagnostic-toiture-particulier" element={<Template jsonData={diagnosticToitureParticulier} />} />
          <Route path="/diagnostic-avant-vente" element={<Template jsonData={diagnosticAvantVente} />} />
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
