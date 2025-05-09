import { FlexBox } from '@/common/components';
import { CTAButton, LoginButton } from '@/common/components/buttons';
import { PALETTE_COLORS } from '@/config/theme';
import { Box, Divider, SxProps, Typography } from '@mui/material';

const HOME_SX: SxProps = {
  width: '100%',
  minHeight: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'url(/assets/images/background.webp)',
};

const HOME_CONTAINER_SX: SxProps = {
  p: { xs: 4, md: 10, xxl: 15 },
  width: '100%',
  bgcolor: 'red',
  minHeight: '100vh',
  alignItems: 'start',
  flexDirection: 'column',
  background: 'linear-gradient(to right, rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2))',
};

export const Hero = () => {
  return (
    <Box id="home" component="header" sx={HOME_SX}>
      <FlexBox sx={{ ...HOME_CONTAINER_SX, justifyContent: 'center' }}>
        <FlexBox sx={{ flexDirection: 'column', mx: 'auto', gap: 4, maxWidth: { sm: '800px', xl: '1000px', xxl: '1200px' } }}>
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 600,
              mx: 'auto',
              fontSize: {
                xs: '2.4rem',
                sm: '3rem',
                md: '3.3rem',
                xl: '5rem',
                xxl: '7rem',
              },
            }}
          >
            Valorisez ce que vous voyez depuis le ciel
          </Typography>
        </FlexBox>
        <Divider sx={{ mt: 4, height: '1px', mx: 'auto', maxWidth: '1200px', width: '100%', bgcolor: 'white' }} />
        <FlexBox sx={{ justifyContent: 'center', width: '100%', mt: 4 }}>
          <FlexBox sx={{ gap: 4, width: '100%' }}>
            <CTAButton sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }} />
            <LoginButton
              variant="text"
              sx={{
                px: 2,
                fontSize: { xs: '1rem', md: '1.3rem' },
                bgcolor: 'white',
                color: PALETTE_COLORS.black,
                '&:hover': { bgcolor: PALETTE_COLORS.pine, color: 'white' },
              }}
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};
