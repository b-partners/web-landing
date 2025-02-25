import { MultipleCarousel } from '@/common/components';
import { DistinctionItem } from '@pages/Home/components/Distinction';
import { DISTINCTION_CAROUSEL_ITEMS } from '@pages/Home/components/Distinction/constant';

import { DetectionType } from './DetectionType';
import { Features } from './Features';
import { Hero } from './Hero';
import { Pricing } from './Pricing';
import { Rating } from './Rating';
import { CTAButton } from './components';

export const AdvertisingCampaign = () => {
  return (
    <div>
      <Hero />
      <CTAButton />
      <h2 className="section-title">Nos distinctions</h2>
      <MultipleCarousel>
        {DISTINCTION_CAROUSEL_ITEMS.map((carousel) => (
          <DistinctionItem carousel={carousel} key={carousel.title} />
        ))}
      </MultipleCarousel>
      <Features />
      <CTAButton />
      <DetectionType />
      <Rating />
      <Pricing />
    </div>
  );
};
