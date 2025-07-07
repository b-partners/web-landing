import { PALETTE_COLORS } from '@/config/theme';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import { Box, Grid, Stack, Typography, Input } from '@mui/material';

import { FooterTemplateStyle } from './styles';

const cities = [
  { name: 'Birdia Paris', url: '/location/paris' },
  { name: 'Birdia Rennes', url: '/location/rennes' },
  { name: 'Birdia Lyon', url: '/location/lyon' },
  { name: 'Birdia Bordeaux', url: '/location/bordeaux' },
  { name: 'Birdia Marseille', url: '/location/marseille' },
  { name: 'Birdia Nice', url: '/location/nice' },
  { name: 'Birdia Toulouse', url: '/location/toulouse' },
  { name: 'Birdia Montpellier', url: '/location/montpellier' },
  { name: 'Birdia Strasbourg', url: '/location/strasbourg' },
];

export const FooterTemplate = () => {
  return (
    <Box component="section" id="template-footer" sx={FooterTemplateStyle}>
      <Box id="footer-container">
        <Input className="footer-title" placeholder='Votre analyse Birdia près de chez vous'></Input>
        <Input className="footer-h6" placeholder='Découvrez nos offres disponibles dans les villes suivantes :'></Input>
      </Box>
      <Grid className="grid-footer" container spacing={4}>
        {cities.map((city, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Stack direction="row" alignItems="center" spacing={1} className="stack-footer">
              <ShareLocationOutlinedIcon sx={{ color: PALETTE_COLORS.pine }} />
              <Input className="footer-link" placeholder='Liens vers autre page'></Input>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Box id="space-bottom" ></Box>
    </Box>
  );
};
