import { PALETTE_COLORS } from '@/config/theme';
import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Button, Divider, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import { reserveDemo } from './components';
import { PricingStyle as style } from './styles';

const pricingListItem = [
  'Activation de notre intelligence artificielle qui analyse les toitures de vos prospects.',
  'Le suivi des toitures de vos clients existants.',
  '20 toitures incluses puis 2€ par toiture supplémentaire.',
  'Support 7/7',
];

export const Pricing = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box sx={style}>
      <Typography sx={{ color: PALETTE_COLORS.neon_orange }}>
        Découvrez le seul outil d'inspection de toiture qui garantit une qualité d'image et une analyse précise, le tout sans se déplacer !
      </Typography>
      <Box className="pricing-item-list">
        <Stack direction="row">
          <Typography></Typography>
          <Box>
            <Typography>49€ / mois</Typography>
          </Box>
        </Stack>
        {pricingListItem.map((text) => (
          <Stack key={text}>
            {!isDesktop && (
              <Stack alignItems="center" mt={2}>
                <CheckCircleOutline />
              </Stack>
            )}
            <Typography>{text}</Typography>
            {isDesktop ? (
              <Box>
                <CheckCircleOutline />
              </Box>
            ) : (
              <Divider />
            )}
          </Stack>
        ))}
        <Stack direction="row">
          <Typography></Typography>
          <Box>
            <Button onClick={reserveDemo} variant="contained" sx={{ bgcolor: PALETTE_COLORS.forest }}>
              RÉSERVEZ VOTRE DÉMO
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
