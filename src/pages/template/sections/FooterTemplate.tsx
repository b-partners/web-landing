import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { PALETTE_COLORS } from '@/config/theme';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import { Box, Grid, Stack, Typography } from '@mui/material';

import { GenButtonDownload } from '../components/GenButtonDonwload';
import { GenInput } from '../components/GenInput';
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
  const { getValues } = useFormContext();
  return (
    <Box component="section" id="template-footer" sx={FooterTemplateStyle}>
      <Box id="footer-container">
        {location.pathname !== '/templateGenerator' ? (
          <Typography variant="h2" className="footer-title">
            {getValues('footer.title') || 'Votre analyse Birdia près de chez vous'}
          </Typography>
        ) : (
          <GenInput name="footer.title" multiline fullWidth className="footer-title" placeholder="Votre analyse Birdia près de chez vous" />
        )}
        {location.pathname !== '/templateGenerator' ? (
          <Typography variant="h6">{getValues('footer.description') || 'Découvrez nos offres disponibles dans les villes suivantes :'}</Typography>
        ) : (
          <GenInput
            name="footer.description"
            multiline
            fullWidth
            className="footer-h6"
            placeholder="Découvrez nos offres disponibles dans les villes suivantes :"
          />
        )}
      </Box>
      <Grid className="grid-footer" container spacing={4}>
        {cities.map((_, index) => {
          const link = getValues(`footer.link.${index}`) || _;
          const name = link.name;
          const route = link.route;

          return (
            <Grid item xs={12} sm={4} key={index}>
              <Stack direction="row" alignItems="center" spacing={1} className="stack-footer">
                <ShareLocationOutlinedIcon sx={{ color: PALETTE_COLORS.pine }} />
                {location.pathname !== '/templateGenerator' ? (
                  <Typography className="footer-link" component="a" href={route}>
                    {name}
                  </Typography>
                ) : (
                  <>
                    <GenInput name={`footer.link.name.${index}`} className="footer-link" placeholder="Nom du liens" />
                    <GenInput name={`footer.link.route.${index}`} className="footer-link" placeholder="URL du lien" />
                  </>
                )}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      <Box id="space-bottom">{location.pathname === '/templateGenerator' && <GenButtonDownload />}</Box>
    </Box>
  );
};
