import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Partners } from '@/common/components/partners';

import { Headline } from './components/headlines';

export function Collectivity() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <Headline />
      <Partners />
    </div>
  );
}
