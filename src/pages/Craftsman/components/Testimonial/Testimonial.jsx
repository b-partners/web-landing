import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { CarouselItem } from '@/common/components/CarouselItem';
import { PALETTE_COLORS } from '@/config/theme';

export function Testimonial() {
  return (
    <section className="testimonial" style={{ backgroundColor: PALETTE_COLORS.white, paddingBlock: '50px' }}>
      <h2 className="testimonial__title">Ils nous font confiance</h2>
      <Carousel showArrows infiniteLoop showThumbs={false} showStatus={false} autoPlay interval={5000}>
        <CarouselItem
          title=" '' Super facile à UTILISER '' "
          paragraph="La qualité des images n'a rien à voir avec Google, l'audit est fait
           en quelques minutes et mon prospect reçoit son devis personnalisé."
          name="David L."
          company="Couvreur dans la Manche 50"
        />
        <CarouselItem
          title=" '' Gain de TEMPS '' "
          paragraph="Je gère seul mon activité et BIRDIA me permet de faire l'analyse
           des toits automatiquement, avec toutes les mesures pour anticiper mon intervention.
            Mes clients reçoivent le projet de réparation en moins de 24H."
          name="Jason H."
          company="Couvreur dans le 77"
        />
        <CarouselItem
          title=" '' Idéal pour une petite STRUCTURE '' "
          paragraph="Après la tempête de Novembre, j'ai eu des centaines de demandes de devis,
                     que j'ai faite à distance en priorisant par urgence et rassuré tous mes prospects.
                     Top, je recommande."
          name="Paul G."
          company="Couvreur dans le 77"
        />
      </Carousel>
    </section>
  );
}
