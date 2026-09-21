import { useUpdateMeta } from '@/common/utils/use-update-meta';

import { Analyse, Hero, Movies, Partners, Solution, Targets, Testimonials } from './components';

export const Home = () => {
  useUpdateMeta(
    'BIRDIA, l’IA qui analyse vos toitures sur images HD',
    "Mesures précises, détection d'anomalies (usures, moisissures...), et gestion de dossiers. Gagnez du temps, optimisez vos interventions !",
  );

  return (
    <>
      <Hero />
      <Partners />
      <Targets />
      <Analyse />
      <Solution />
      <Movies />
      <Testimonials />
    </>
  );
};
