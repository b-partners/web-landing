import { MultipleCarousel } from '@/common/components';
import { DistinctionItem } from '@pages/Home/components/Distinction';
import { DISTINCTION_CAROUSEL_ITEMS } from '@pages/Home/components/Distinction/constant';

import { Hero } from './Hero';

export const AdvertisingCampaign = () => {
  return (
    <div>
      <Hero />
      <h2 className="section-title">Nos distinctions</h2>
      <MultipleCarousel>
        {DISTINCTION_CAROUSEL_ITEMS.map((carousel) => (
          <DistinctionItem carousel={carousel} key={carousel.title} />
        ))}
      </MultipleCarousel>
    </div>
  );
};
