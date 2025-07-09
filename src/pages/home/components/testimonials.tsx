import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useLocation } from 'react-router-dom';

import { FlexBox } from '@/common/components';
import { CTAButton, LinkButton } from '@/common/components/buttons';
import { Env } from '@/common/utils/env';
import { PALETTE_COLORS } from '@/config/theme';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, SxProps, Typography } from '@mui/material';
import { GenInput } from '@pages/template/components/GenInput';
import { GenRating } from '@pages/template/components/GenRating';

import { TESTIMONIALS } from '../utils/constant';
import { TestimonialItem } from './testimonial-item';

export const RESPONSIVE: ResponsiveType = {
  desktop: {
    breakpoint: { max: 3000, min: 800 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TESTIMONIAL_SX: SxProps = {
  '& .react-multi-carousel-dot-list': {
    justifyContent: { xs: 'center', md: 'start' },
  },
  '& .react-multi-carousel-dot button': {
    border: 'none !important',
    bgcolor: 'var(--peach)',
  },
  '& .react-multi-carousel-dot--active button': {
    bgcolor: 'var(--neon-orange) !important',
  },
};

export const Testimonials = () => {
  const location = useLocation();
  return (
    <Box
      component="section"
      sx={{
        p: { xs: 2, md: 10, xxl: 15 },
        bgcolor: 'white',
      }}
    >
      <Box sx={TESTIMONIAL_SX}>
        {location.pathname === '/templateGenerator' ? (
          <GenInput
            name="testimonial.title1"
            placeholder="Témoignages clients"
            sx={{
              textAlign: { xs: 'center', md: 'start' },
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: { xs: 3, md: 5, xl: 7 },
              color: PALETTE_COLORS.neon_orange,
            }}
          />
        ) : (
          <Typography
            sx={{
              textAlign: { xs: 'center', md: 'start' },
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem' },
              mb: { xs: 3, md: 5, xl: 7 },
              color: PALETTE_COLORS.neon_orange,
            }}
          >
            Témoignages clients
          </Typography>
        )}
        <Carousel
          showDots
          infinite
          autoPlay={location.pathname !== '/templateGenerator'}
          keyBoardControl={location.pathname !== '/templateGenerator'}
          partialVisbile
          draggable={false}
          swipeable={false}
          responsive={RESPONSIVE}
          autoPlaySpeed={5_000}
          transitionDuration={500}
          removeArrowOnDeviceType={['mobile', 'tablet']}
          customLeftArrow={
            <IconButton sx={{ zIndex: 999999, border: '1px solid var(--forest)', position: 'absolute', bottom: '0px', right: 'calc(4% + 80px)' }}>
              <ArrowBack color="primary" />
            </IconButton>
          }
          customRightArrow={
            <IconButton sx={{ zIndex: 999999, border: '1px solid var(--forest)', position: 'absolute', bottom: '0px', right: '4%' }}>
              <ArrowForward color="primary" />
            </IconButton>
          }
        >
          {TESTIMONIALS.map((testimonial, index) =>
            location.pathname === '/templateGenerator' ? (
              <Box key={index} sx={{ px: 3 }}>
                <GenRating name={`testimonials.${index}.star`} />
                <GenInput name={`testimonials.${index}.opinion`} fullWidth placeholder="Témoignage" sx={{ mb: 2 }} />
                <GenInput name={`testimonials.${index}.name`} placeholder="Nom du client" sx={{ mb: 2, fontWeight: 'bold', display: 'block', width: '20%' }} />
                <GenInput name={`testimonials.${index}.Occupation`} placeholder="Profession" sx={{ mb: 5 }} />
              </Box>
            ) : (
              <TestimonialItem key={testimonial.name} testimonial={testimonial} />
            )
          )}
        </Carousel>
      </Box>
      <FlexBox
        sx={{
          px: { xs: 2, md: 5 },
          py: 10,
          gap: 5,
          flexDirection: 'column',
          width: { xs: '100%', xl: '90%' },
          mt: { xs: 5, xl: 10 },
          mx: 'auto',
          bgcolor: PALETTE_COLORS.pine,
          borderRadius: '30px',
        }}
      >
        {location.pathname === '/templateGenerator' ? (
          <GenInput
            name="testimonial.title2"
            multiline
            fullWidth
            placeholder="Passez à l’analyse intelligente, sans compléxité"
            sx={{
              maxWidth: '1300px',
              textAlign: 'center',
              fontWeight: 'bold',
              color: PALETTE_COLORS.white,
              fontSize: { xs: '2.4rem', md: '3.5rem', xl: '4rem' },
            }}
          />
        ) : (
          <Typography
            variant="h2"
            sx={{
              maxWidth: '1300px',
              textAlign: 'center',
              fontWeight: 'bold',
              color: PALETTE_COLORS.white,
              fontSize: { xs: '2.4rem', md: '3.5rem', xl: '4rem' },
            }}
          >
            Passez à l’analyse intelligente, sans compléxité
          </Typography>
        )}
        <FlexBox sx={{ gap: { xs: 2, md: 5 } }}>
          <CTAButton />
          <LinkButton color="white" to={Env.DASHBOARD_REGISTRATION_URL}>
            Tester gratuitement
          </LinkButton>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};
