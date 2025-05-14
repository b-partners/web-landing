import { Contact } from './Contact';
import { DetectionType } from './DetectionType';
import { FrequentAskingQuestion } from './FAQ';
import { Features } from './Features';
import { Hero } from './Hero';
import { Pricing } from './Pricing';
import { Rating } from './Rating';
import { Distinction } from './components/distinction';

export const AdvertisingCampaign = () => {
  return (
    <div>
      <Hero />
      <Distinction />
      <Features />
      <DetectionType />
      <Rating />
      <Pricing />
      <FrequentAskingQuestion />
      <Contact />
    </div>
  );
};
