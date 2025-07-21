import { FC } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import { useLocation } from 'react-router-dom';

import { PALETTE_COLORS } from '@/config/theme';
import { Box, Typography } from '@mui/material';
import { GenInput } from '@pages/template/components/GenInput';
import { useTemplateFormContext } from '@pages/template/utils/use-template-form-context';

const PARTNERS = [
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

const RESPONSIVE: ResponsiveType = {
  superLargeDesktop: { breakpoint: { max: 10000, min: 2201 }, items: 6 },
  mediumDesktop: { breakpoint: { max: 2200, min: 1201 }, items: 4 },
  desktop: { breakpoint: { max: 1200, min: 1000 }, items: 3 },
  tablet: { breakpoint: { max: 1000, min: 601 }, items: 2 },
  mobile: { breakpoint: { max: 600, min: 451 }, items: 1 },
  smallMobile: { breakpoint: { max: 450, min: 0 }, items: 1 },
};

type Partner = { img: string; alt: string };
type PartnersProps = { partnersFromJson?: Partner[] };

export const Partners: FC<PartnersProps> = ({ partnersFromJson }) => {
  const location = useLocation();
  const isEditMode = location.pathname === '/templateGenerator';
  const partners = partnersFromJson || PARTNERS;

  const { getValues } = useTemplateFormContext();

  return (
    <Box sx={{ p: 5 }}>
      {isEditMode ? (
        <GenInput
          name="theyTrustUs.title"
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
          sx={{
            fontSize: { xs: '1.2rem', md: '1.5rem' },
            mb: 10,
            textAlign: 'center',
            fontWeight: 'bold',
            color: PALETTE_COLORS.neon_orange,
          }}
        >
          {getValues('theyTrustUs.title') || 'Ils nous font confiance'}
        </Typography>
      )}

      <Carousel infinite autoPlay={!isEditMode} arrows={isEditMode} draggable={!isEditMode} swipeable={!isEditMode} responsive={RESPONSIVE}>
        {partners.map((partner, index) => {
          const uploadedImage = getValues(`theyTrustUs.image.${index}`);
          const imageUrl = uploadedImage instanceof File ? URL.createObjectURL(uploadedImage) : uploadedImage || partner.img;

          return (
            <Box key={index} sx={{ width: '300px', textAlign: 'center' }}>
              {isEditMode ? (
                <GenInput
                  fullWidth
                  inputComponent="input"
                  inputProps={{ accept: 'image/*' } as any}
                  name={`theyTrustUs.image.${index}`}
                  type="file"
                  sx={{ mb: 2 }}
                />
              ) : (
                <img src={imageUrl} alt={partner.alt} style={{ maxWidth: '300px', maxHeight: '150px' }} />
              )}
            </Box>
          );
        })}
      </Carousel>
    </Box>
  );
};
