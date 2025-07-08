import { FC } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import { useLocation } from 'react-router-dom';

import { PALETTE_COLORS } from '@/config/theme';
import { Box, Input, Typography } from '@mui/material';

const PARTNERS = [
  {
    img: '/assets/images/references/1_maif.webp',
    alt: 'MAIF',
  },
  {
    img: '/assets/images/references/2_region_ile_de_france.webp',
    alt: 'Région ile de France',
  },
  {
    img: '/assets/images/references/3_french_assure_tech.webp',
    alt: 'La French Assuretech',
  },
  {
    img: '/assets/images/references/4_dijon_metropole.webp',
    alt: 'Dijon Metropole',
  },
  {
    img: '/assets/images/references/5_toulouse_metropole.webp',
    alt: 'Toulouse Metropole',
  },
  {
    img: '/assets/images/references/6_cannes.webp',
    alt: 'Cannes',
  },
  {
    img: '/assets/images/references/7_valence_romans_agglo.webp',
    alt: 'Valence Romans Agglo',
  },
  {
    img: '/assets/images/references/8_cotentin.webp',
    alt: 'Cotentin',
  },
  {
    img: '/assets/images/references/9_chalons.webp',
    alt: 'Châlons Agglo',
  },
  {
    img: '/assets/images/references/10_abs.webp',
    alt: 'ABS',
  },
  {
    img: '/assets/images/references/11_sicoval.webp',
    alt: 'Sicoval',
  },
  {
    img: '/assets/images/references/12_cdcidr.webp',
    alt: 'CDCIDR',
  },
  {
    img: '/assets/images/references/13_europe_vue_de_ciel.webp',
    alt: 'Europe vue de ciel',
  },
  {
    img: '/assets/images/references/14_startup_cea.webp',
    alt: 'Startup CEA',
  },
  {
    img: '/assets/images/references/15_labelisez_deeptech_bpi.webp',
    alt: 'Labelised Deeptech BPI',
  },
  {
    img: '/assets/images/references/16_wilko.webp',
    alt: 'Wilko',
  },
  {
    img: '/assets/images/references/17_imt.webp',
    alt: 'IMT',
  },
];

type Partner = {
  img: string;
  alt: string;
};

type PartnersProps = {
  partnersFromJson?: Partner[]; // facultatif, permet de passer une liste personnalisée
};

export const PartnersItem: FC<{ img: string; alt: string }> = ({ img, alt }) => {
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

export const Partners: FC<PartnersProps> = ({ partnersFromJson }) => {
  const location = useLocation();
  const isEditMode = location.pathname === '/templateGenerator';
  const partners = partnersFromJson || PARTNERS;
  return (
    <Box sx={{ p: 5 }}>
      {location.pathname === '/templateGenerator' ? (
        <Input
          sx={{
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            mb: 10,
            mx: 'auto',
            fontWeight: 'bold',
            color: PALETTE_COLORS.neon_orange,
            width: { xs: '90%', md: '400px' },
            display: 'block',
          }}
          placeholder="Ils nous font confiance"
        />
      ) : (
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' }, mb: 10, textAlign: 'center', fontWeight: 'bold', color: PALETTE_COLORS.neon_orange }}
        >
          Ils nous font confiance
        </Typography>
      )}
      <Carousel infinite autoPlay={!isEditMode} arrows={isEditMode} draggable={!isEditMode} swipeable={!isEditMode} responsive={RESPONSIVE}>
        {partners.map((partner, index) => (
          <Box key={index} sx={{ width: '300px', textAlign: 'center' }}>
            {isEditMode ? (
              <>
                <Input fullWidth placeholder="URL de l'image" sx={{ mb: 2 }} />
                <Input fullWidth placeholder="Texte alternatif" />
              </>
            ) : (
              <img src={partner.img} alt={partner.alt} style={{ width: '300px' }} />
            )}
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};
