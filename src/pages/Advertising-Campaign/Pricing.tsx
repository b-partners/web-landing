import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';

import { PricingStyle as style } from './styles';

const pricingListItem = [
  'Activation de notre intelligence artificielle qui analyse les toitures de vos prospects.',
  'Le suivi des toitures de vos clients existants.',
  '20 toitures incluses puis 2€ par toiture supplémentaire.',
  'Support 7/7',
];

export const Pricing = () => {
  return (
    <Box sx={style}>
      <Typography>
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
          <Stack direction="row" key={text}>
            <Typography>{text}</Typography>
            <Box>
              <CheckCircleOutline />
            </Box>
          </Stack>
        ))}
        <Stack direction="row">
          <Typography></Typography>
          <Box>
            <Button variant='contained'>RÉSERVEZ VOTRE DÉMO</Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
