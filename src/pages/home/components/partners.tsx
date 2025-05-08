import { FC } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';

import { PALETTE_COLORS } from '@/config/theme';
import { Box, Typography } from '@mui/material';

const PARTNERS = [
  {
    img: '/assets/images/references/1_maif.png',
    alt: 'MAIF',
  },
  {
    img: '/assets/images/references/2_region_ile_de_france.png',
    alt: 'Région ile de France',
  },
  {
    img: '/assets/images/references/3_french_assure_tech.png',
    alt: 'La French Assuretech',
  },
  {
    img: '/assets/images/references/4_dijon_metropole.png',
    alt: 'Dijon Metropole',
  },
  {
    img: '/assets/images/references/5_toulouse_metropole.png',
    alt: 'Toulouse Metropole',
  },
  {
    img: '/assets/images/references/6_cannes.png',
    alt: 'Cannes',
  },
  {
    img: '/assets/images/references/7_valence_romans_agglo.png',
    alt: 'Valence Romans Agglo',
  },
  {
    img: '/assets/images/references/8_cotentin.png',
    alt: 'Cotentin',
  },
  {
    img: '/assets/images/references/9_chalons.png',
    alt: 'Châlons Agglo',
  },
  {
    img: '/assets/images/references/10_abs.png',
    alt: 'ABS',
  },
  {
    img: '/assets/images/references/11_sicoval.png',
    alt: 'Sicoval',
  },
  {
    img: '/assets/images/references/12_cdcidr.png',
    alt: 'CDCIDR',
  },
  {
    img: '/assets/images/references/13_europe_vue_de_ciel.png',
    alt: 'Europe vue de ciel',
  },
  {
    img: '/assets/images/references/14_startup_cea.png',
    alt: 'Startup CEA',
  },
  {
    img: '/assets/images/references/15_labelisez_deeptech_bpi.png',
    alt: 'Labelised Deeptech BPI',
  },
  {
    img: '/assets/images/references/16_wilko.png',
    alt: 'Wilko',
  },
  {
    img: '/assets/images/references/17_imt.png',
    alt: 'IMT',
  },
];

const PartnersItem: FC<{ img: string; alt: string }> = ({ img, alt }) => {
  return (
    <Box sx={{ width: '300px' }}>
      <img src={img} alt={alt} style={{ width: '300px' }} />
    </Box>
  );
};

const RESPONSIVE: ResponsiveType = {
  superLargeDesktop: {
    breakpoint: { max: 10000, min: 2201 },
    items: 6,
  },
  mediumDesktop: {
    breakpoint: { max: 2200, min: 1201 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1000 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1000, min: 601 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 451 },
    items: 1,
  },
  smallMobile: {
    breakpoint: { max: 450, min: 0 },
    items: 1,
  },
};

export const Partners = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, mb: 10, textAlign: 'center', fontWeight: 'bold', color: PALETTE_COLORS.neon_orange }}
      >
        Ils nous font confiance
      </Typography>
      <Carousel
        infinite
        autoPlay
        keyBoardControl
        arrows={false}
        draggable={false}
        swipeable={false}
        pauseOnHover={false}
        responsive={RESPONSIVE}
        autoPlaySpeed={3_000}
        transitionDuration={500}
      >
        {PARTNERS.map((partner) => (
          <PartnersItem key={partner.alt} {...partner} />
        ))}
      </Carousel>
    </Box>
  );
};
