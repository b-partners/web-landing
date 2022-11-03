import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Testimonial1 from '../../assets/img/testimonial-1.jpg'
import Testimonial2 from '../../assets/img/testimonial-2.jpg'
import Testimonial3 from '../../assets/img/testimonial-3.jpg'
import { CarouselItem } from '../../../../common/components/CarouselItem';

export function Testimonial() {
    return (
        <section className='testimonial'>
            <h2 className='testimonial__title'>Ils nous ont fait confiance</h2>
            <Carousel
                showArrows
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                autoPlay
                interval={5000}
            >
                <CarouselItem
                    title=" '' Application super EFFICACE '' "
                    paragraph="Je fais beaucoup de devis pour les mariages et l’édition,
                    l’envoie et le suivi sont très simples sur BPartners.
                    L’outil de prospection intelligent est prometteur."
                    imageSrc={Testimonial1}
                    name="Anna M."
                    company="Fleuriste"
                />
                <CarouselItem
                    title=" '' Application facile à UTILISER '' "
                    paragraph="J’ai aidé BPartners  à construire cette application pour répondre
                    à mes besoins, je trouve un client, je fais la prestation et je l’encaisse
                    directement sur mon mobile avant de partir. Mon cycle de vente est plus
                    clair avec BPartners."
                    imageSrc={Testimonial2}
                    name="Paul G."
                    company="Plombier"
                />
                <CarouselItem
                    title=" '' Démarche AUTHENTIQUE '' "
                    paragraph="On a discuté pour comprendre mon besoin de coiffeur itinérante et BPartners
                    m’a proposé une application tout en un. Il me dit quel client relancer, et le client
                    règle sa prestation directement sur son mobile, plus de machine TPE pour moi."
                    imageSrc={Testimonial3}
                    name="Marie D."
                    company="Coiffeur"
                />
            </Carousel>
        </section>
    )
}
