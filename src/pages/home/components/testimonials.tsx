import Carousel, { ResponsiveType } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { FlexBox } from '@/common/components';
import { CTAButton, LinkButton } from '@/common/components/buttons';
import { Env } from '@/common/utils/env';
import { PALETTE_COLORS } from '@/config/theme';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, SxProps, Typography } from '@mui/material';

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
    justifyContent: 'start',
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
  return (
    <Box
      component="section"
      sx={{
        p: { xs: 10, xxl: 15 },
        bgcolor: 'white',
      }}
    >
      <Box sx={TESTIMONIAL_SX}>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, mb: { xs: 3, md: 5, xl: 7 }, color: PALETTE_COLORS.neon_orange }}>
          Témoignages clients
        </Typography>
        <Carousel
          showDots
          infinite
          autoPlay
          keyBoardControl
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
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialItem key={testimonial.name} testimonial={testimonial} />
          ))}
        </Carousel>
      </Box>
      <FlexBox
        sx={{
          px: 5,
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
        <Typography
          variant="h2"
          sx={{
            maxWidth: '1300px',
            textAlign: 'center',
            fontWeight: 'bold',
            color: PALETTE_COLORS.white,
            fontSize: { xs: '3rem', md: '3.5rem', xl: '4rem' },
          }}
        >
          Passez à l’analyse intelligente, sans compléxité
        </Typography>
        <FlexBox sx={{ gap: 5 }}>
          <CTAButton />
          <LinkButton color="white" to={Env.DASHBOARD_REGISTRATION_URL}>
            Tester gratuitement
          </LinkButton>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};
