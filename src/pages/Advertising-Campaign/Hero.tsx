import { Box, Container, Stack } from '@mui/material';

import { CTAButton, CreateAccountButton, HeroDescriptionImage as DescriptionImage, HeroDescriptionText as DescriptionText } from './components';
import { HeroStyle as style } from './styles';

export const Hero = () => {
  return (
    <Container>
      <Box sx={style}>
        <Box sx={{ mt: 2 }}>
          <img alt="BIRDIA Logo" src="/assets/images/logo.png" style={{ height: '40px' }} />
        </Box>
        <Box className="description-container">
          <Box className="description-content">
            <DescriptionText />
            <DescriptionImage />
          </Box>
        </Box>
        <Stack direction="row" width="100%" flexWrap="wrap" justifyContent="center" gap={2}>
          <CTAButton />
          <CreateAccountButton />
        </Stack>
      </Box>
    </Container>
  );
};
