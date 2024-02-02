import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { CarouselItem } from '../../../../common/components/CarouselItem';

export function Testimonial() {
  return (
    <section className="testimonial">
      <h2 className="testimonial__title">Ils nous font confiance</h2>
      <Carousel showArrows infiniteLoop showThumbs={false} showStatus={false} autoPlay interval={5000}>
        <CarouselItem
          title=" '' Application super EFFICACE '' "
          paragraph="Je fais beaucoup de devis pour les mariages et l’édition,
                    l’envoi et le suivi sont très simples sur BPartners.
                    L’outil de prospection intelligent est prometteur."
          name="Anna M."
          company="Fleuriste dans le 76"
        />
        <CarouselItem
          title=" '' Application facile à UTILISER '' "
          paragraph="J’ai aidé BPartners  à construire cette application pour répondre
                    à mes besoins, je trouve un client, je fais la prestation et je l’encaisse
                    directement sur mon mobile avant de partir. Mon cycle de vente est plus
                    clair avec BPartners."
          name="Paul G."
          company="Plombier dans le 35"
        />
        <CarouselItem
          title=" '' Démarche AUTHENTIQUE '' "
          paragraph="On a discuté pour comprendre mon besoin de coiffeur itinérante et BPartners
                    m’a proposé une application tout en un. Il me dit quel client relancer, et le client
                    règle sa prestation directement sur son mobile, plus de machine TPE pour moi."
          name="Marie D."
          company="Coiffeuse à domicile en Ile-de-France"
        />
      </Carousel>
    </section>
  );
}
