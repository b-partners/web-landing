import { Carousel } from '@/common/components';

import { TestimonialItem } from './components';

export const Testimonials = () => {
  return (
    <div style={{ marginBottom: '50px' }}>
      <Carousel>
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
      </Carousel>
    </div>
  );
};
