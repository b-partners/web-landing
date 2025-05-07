import { PALETTE_COLORS } from '@/config/theme';

import assureursImg from '../assets/images/assureurs.png';
import collectivitesImg from '../assets/images/collectivites.png';
import courvreursImg from '../assets/images/couvreurs.png';

export type TargetType = {
  title: string;
  subtitle: string;
  description: string;
  img: string;
  link: string;
};

export const TARGETS: TargetType[] = [
  {
    title: 'Couvreurs',
    subtitle: 'Inspectez vos toitures à distance, en toute simplicité',
    description:
      'Générez des rapports d’analyses de toitures sans vous déplacer, grâce à notre logiciel de détection d’objets et d’anomalies sur images HD et jusqu’à 5cm de précision.',
    img: courvreursImg,
    link: '/craftsman',
  },
  {
    title: 'Assureurs',
    subtitle: 'Prévenez mieux, intervenez plus vite',
    description:
      'Notre IA transforme les images aériennes ultra HD en rapports d’analyse toiture précis. En identifiant en amont les sinistres potentiels (usure, humidité, dégradation), vous anticipez les risques et améliorez la prévention. Facilitez la souscription, accélérez les expertises post-événement, optimisez la relation client.',
    img: assureursImg,
    link: '/insurance',
  },
  {
    title: 'Collectivités',
    subtitle: 'Valorisez vos images PCRS comme jamais auparavant',
    description:
      'Exploitez les orthophotos PCRS et données LiDAR déjà en votre possession pour détecter automatiquement des objets d’intérêt : état des toitures publiques, végétation à risque, voirie dégradée, îlots de chaleur…. BIRDIA transforme ces données en diagnostics concrets pour vos plans ZAN, LOM, Climat & Résilience, tout en vous faisant gagner du temps sur le terrain.',
    img: collectivitesImg,
    link: '/collectivity',
  },
];

export type AnalayseType = {
  title: string;
  description: string;
  bgcolor: string;
  color: string;
};

export const ANALYSES: AnalayseType[] = [
  {
    title: 'Analyse et rapports en temps réel',
    description: 'Analyse en temps réel pour prioriser vos interventions et gagner du temps.',
    bgcolor: PALETTE_COLORS.peach,
    color: PALETTE_COLORS.forest,
  },
  {
    title: 'Comment fonctionne notre technologie',
    description: 'Avec une simple adresse postale, analysez automatiquement les toitures de vos clients et prospects.',
    bgcolor: PALETTE_COLORS.pine,
    color: PALETTE_COLORS.white,
  },
  {
    title: 'Un traitement d’image avancé',
    description: 'Notre IA transforme des images HD 5cm de résolution en données claires et exploitables, sans saisie manuelle.',
    bgcolor: PALETTE_COLORS.forest,
    color: PALETTE_COLORS.white,
  },
];
