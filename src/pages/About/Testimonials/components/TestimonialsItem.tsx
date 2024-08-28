import { BpButton } from '@/common/components/Button';
import { BP_COLOR } from '@/config';
import { Box, Divider, Typography } from '@mui/material';

import theyTalkAboutUs from '../../assets/they-talk-about-us.png';

export const TestimonialItem = () => {
  return (
    <Box sx={{ width: '95%', mx: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <img src={theyTalkAboutUs} style={{ display: 'block', width: 'fit-content' }} />
      <Typography variant="h4" sx={{ color: 'black', opacity: 0.9, fontSize: '1rem', fontWeight: 'bold', mt: 1 }}>
        <span style={{ textDecoration: 'underline' }}>La BRED</span> banque des entreprises
      </Typography>
      <Divider sx={{ width: '300px', mt: 3, mb: 2, bgcolor: BP_COLOR['5'], height: '2px' }} />
      <Typography sx={{ fontSize: '1.2rem', maxWidth: '800px', textAlign: 'center', fontWeight: 'bold', color: 'black', opacity: 0.9 }}>
        "BPartners est lauréat du Concours Régional Ile-de-France de Création d'Entreprise organisé par la BRED & la Chambre de Commerce de l'Industrie de
        l'Ile-de-France . Tout ce dont un artisan couvreur a besoin se trouve dans BPartners."
      </Typography>
      <BpButton sx={{ my: 2, zIndex: 9999 }} disabled={false}>
        En savoir plus
      </BpButton>
    </Box>
  );
};
