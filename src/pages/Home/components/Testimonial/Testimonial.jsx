import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Testimonial1 from '../../assets/img/testimonial-1.jpg'
import Testimonial2 from '../../assets/img/testimonial-2.jpg'
import Testimonial3 from '../../assets/img/testimonial-3.jpg'
import { CarouselItem } from '../../../../common/components/CarouselItem';

export function Testimonial() {
    return (
        <section className='testimonial section'>
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
                    paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, quidem. Nihil iusto, voluptatem saepe ducimus corporis magni.
                    Doloremque."
                    imageSrc={Testimonial1}
                    name="Anna M."
                    company="Fleuriste"
                />
                <CarouselItem
                    title=" '' Application facile à UTILISER '' "
                    paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, quidem. Nihil iusto, voluptatem saepe ducimus corporis magni.
                    Doloremque."
                    imageSrc={Testimonial2}
                    name="Paul G."
                    company="Plombier"
                />
                <CarouselItem
                    title=" '' Application AUTHENTIQUE '' "
                    paragraph="Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem, quidem. Nihil iusto, voluptatem saepe ducimus corporis magni.
                    Doloremque."
                    imageSrc={Testimonial3}
                    name="Marie D."
                    company="Coiffeur"
                />
            </Carousel>
        </section>
    )
}
