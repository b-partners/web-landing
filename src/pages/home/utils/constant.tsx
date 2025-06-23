import { ReactNode } from 'react';

import { PALETTE_COLORS } from '@/config/theme';
import { Typography } from '@mui/material';

import assureursImg from '../assets/images/assureurs.webp';
import collectivitesImg from '../assets/images/collectivites.webp';
import courvreursImg from '../assets/images/couvreurs.webp';

export type TargetType = {
  title: string;
  subtitle: string;
  description: ReactNode;
  img: string;
  link: string;
};

export const TARGETS: TargetType[] = [
  {
    title: 'Couvreurs',
    subtitle: 'Inspectez vos toitures à distance, en toute simplicité',
    description: (
      <Typography sx={{ mt: 3, mx: 'auto', maxWidth: '450px', fontSize: { xs: '1rem', xl: '1.2rem' }, textAlign: 'center' }}>
        Notre solution permet d'identifier sur des images HD allant jusqu'à 5cm de précision, les dommages, anomalies de matériaux et d'en prendre les mesures.
      </Typography>
    ),
    img: courvreursImg,
    link: '/couvreurs',
  },
  {
    title: 'Assureurs',
    subtitle: 'Connaissez vos risques pour mieux prévenir',
    description: (
      <Typography sx={{ mt: 3, mx: 'auto', maxWidth: '450px', fontSize: { xs: '1rem', xl: '1.2rem' }, textAlign: 'center' }}>
        Notre IA transforme les images aériennes ultra HD en rapports d’analyse toiture précis.
        <br style={{ marginBottom: 8 }} />
        En identifiant en amont les sinistres potentiels (usure, humidité, dégradation), vous anticipez les risques et améliorez la prévention.
        <br style={{ marginBottom: 8 }} />
        Facilitez la souscription, accélérez les expertises post-événement, optimisez la relation client.
      </Typography>
    ),
    img: assureursImg,
    link: '/assurances',
  },
  {
    title: 'Collectivités',
    subtitle: 'Valorisez vos images PCRS comme jamais auparavant',
    description: (
      <Typography sx={{ mt: 3, mx: 'auto', maxWidth: '450px', fontSize: { xs: '1rem', xl: '1.2rem' }, textAlign: 'center' }}>
        Exploitez les orthophotos PCRS et données LiDAR déjà en votre possession pour détecter automatiquement des objets d’intérêt : état des toitures
        publiques, végétation à risque, voirie dégradée, îlots de chaleur….
        <br style={{ marginBottom: 8 }} />
        BIRDIA transforme ces données en diagnostics concrets pour vos plans ZAN, LOM, Climat & Résilience, tout en vous faisant gagner du temps sur le terrain.
      </Typography>
    ),
    img: collectivitesImg,
    link: '/collectivites',
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
    title: 'Comment fonctionne notre technologie ?',
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

export type Testimonial = {
  star: number;
  content: string;
  name: string;
  job: string;
  avatar?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    star: 5,
    name: 'Laurent M.',
    job: 'Responsable Innovation – Assureur Habitation',
    content:
      'Birdia est un véritable game changer. L’outil est à la fois intuitif, puissant et ludique. En quelques clics, nous pouvons visualiser, détecter et évaluer des centaines de toitures. Cela change notre manière de penser la prévention et le service client.',
  },
  {
    star: 5,
    name: 'Émilie C.',
    job: 'Responsable Souscription Habitation – Groupe IARD',
    content:
      'Grâce à Birdia, nos équipes disposent d’une vision détaillée de chaque bien assuré. La précision de l’analyse des matériaux, de l’usure et des risques nous permet d’adapter finement les contrats. C’est un vrai plus pour la maîtrise technique et commerciale.',
  },
  {
    star: 5,
    name: 'Idris B.',
    job: 'Artisan couvreur (35 - Ille-et-Vilaine)',
    content:
      'Je ne perds plus de temps sur la route. Birdia me permet de faire des pré-diagnostics précis, directement depuis mon bureau. Depuis que j’ai intégré leur outil sur mon site, mes demandes de devis ont explosé.',
  },
  {
    star: 5,
    name: 'Arnaud P.',
    job: 'Gérant entreprise de couverture (Cannes)',
    content:
      'L’outil Birdia est simple, rapide et fiable. Je peux générer un rapport technique avant même de visiter le chantier. Cela me fait gagner des heures chaque semaine, tout en améliorant la qualité de mes prestations.',
  },
  {
    star: 5,
    name: 'Joël D.',
    job: 'Couvreur expérimenté (Hauts-de-France)',
    content:
      'Birdia, c’est mon assistant digital. Je l’utilise au quotidien pour détecter les toits à rénover, et les clients adorent recevoir un rapport visuel clair. Même mes devis sont mieux acceptés grâce à ça.',
  },
  {
    star: 5,
    name: 'Nathalie L.',
    job: 'Responsable SIG',
    content:
      'Enfin une solution qui valorise concrètement nos orthophotos PCRS. Avec Birdia, on extrait des données directement exploitables pour l’urbanisme, la végétation ou les risques. Le ROI est immédiat.',
  },
  {
    star: 5,
    name: 'Julien V.',
    job: 'DSI',
    content:
      'Birdia nous aide à créer de la donnée métier à partir des images que nous avons déjà. C’est un outil idéal pour simplifier les échanges avec les services techniques, les élus, et prendre de meilleures décisions.',
  },
];
