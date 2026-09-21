import { Partners } from '@/common/components/partners';
import { useUpdateMeta } from '@/common/utils/use-update-meta';

import { Headline } from './components/headlines';

export function Collectivity() {
  useUpdateMeta(
    'BIRDIA pour les collectivités : valorisez vos images aériennes par IA',
    'Transformez vos images aériennes (PCRS, LiDAR, infrarouge) en données d’aide à la décision : détection automatisée d’objets urbains et suivi ZAN, LOM, Climat & Résilience.'
  );

  return (
    <div>
      <Headline />
      <Partners />
    </div>
  );
}
