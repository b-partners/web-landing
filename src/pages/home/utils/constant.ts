import courvreursImg from '../assets/images/couvreurs.png';
import collectivitesImg from '../assets/images/collectivites.png';
import assureursImg from '../assets/images/assureurs.png';

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
    title: 'Collectivités',
    subtitle: 'Valorisez vos images PCRS comme jamais auparavant',
    description:
      'Exploitez les orthophotos PCRS et données LiDAR déjà en votre possession pour détecter automatiquement des objets d’intérêt : état des toitures publiques, végétation à risque, voirie dégradée, îlots de chaleur…',
    img: collectivitesImg,
    link: '/collectivity',
  },
  {
    title: 'Assureurs',
    subtitle: 'Prévenez mieux, intervenez plus vite',
    description:
      'Notre IA transforme les images aériennes ultra HD en rapports d’analyse toiture précis. En identifiant en amont les sinistres potentiels (usure, humidité, dégradation), vous anticipez les risques et améliorez la prévention. Facilitez la souscription, accélérez les expertises post-événement, optimisez la relation client.',
    img: assureursImg,
    link: '/insurance',
  },
];
