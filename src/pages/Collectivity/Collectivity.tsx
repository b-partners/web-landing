import { Partners } from '@/common/components/partners';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import { Headline } from './components/headlines';

export function Collectivity() {
  useUpdateMeta(
    'BIRDIA pour les collectivités : cartographie et suivi des toitures par IA',
    'Donnez à vos équipes une vision claire du patrimoine bâti : analyse des toitures par IA sur images aériennes HD pour prioriser vos interventions.',
  );

  return (
    <div>
      <Headline />
      <Partners />
    </div>
  );
}
