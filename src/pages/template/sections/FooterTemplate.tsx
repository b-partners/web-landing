import { useLocation } from 'react-router-dom';

import { PALETTE_COLORS } from '@/config/theme';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import { Box, Grid, Input, Stack, Typography } from '@mui/material';

import { GenButtonDownload } from '../components/GenButtonDonwload';
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
  const location = useLocation();
  return (
    <Box component="section" id="template-footer" sx={FooterTemplateStyle}>
      <Box id="footer-container">
        {location.pathname === '/template' ? (
          <Typography variant="h2" className="footer-title">
            Votre analyse Birdia près de chez vous
          </Typography>
        ) : (
          <Input multiline fullWidth className="footer-title" placeholder="Votre analyse Birdia près de chez vous" />
        )}
        {location.pathname === '/template' ? (
          <Typography variant="h6">Découvrez nos offres disponibles dans les villes suivantes :</Typography>
        ) : (
          <Input multiline fullWidth className="footer-h6" placeholder="Découvrez nos offres disponibles dans les villes suivantes :" />
        )}
      </Box>
      <Grid className="grid-footer" container spacing={4}>
        {cities.map((city, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Stack direction="row" alignItems="center" spacing={1} className="stack-footer">
              <ShareLocationOutlinedIcon sx={{ color: PALETTE_COLORS.pine }} />
              {location.pathname === '/template' ? (
                <Typography className="footer-link" component="a" href={city.url}>
                  {city.name}
                </Typography>
              ) : (
                <Input className="footer-link" placeholder="Liens vers autre page" />
              )}
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Box id="space-bottom">{location.pathname === '/templateGenerator' && <GenButtonDownload />}</Box>
    </Box>
  );
};
