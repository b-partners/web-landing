import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { CTAButton } from '@/common/components/buttons';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

import { GenInput } from '../components/GenInput';
import { HeroPageStyle } from './styles';
import heroImage from '/assets/images/hero/cities.webp';

const heroItems = ['Pas de CB requise', 'Essaie gratuit de 14 jours', "Jusqu'à 38 analyses"];

export const HeroPage = () => {
  const location = useLocation();
  const { getValues } = useFormContext();

  return (
    <Box component="section" id="template-HeroPage" sx={HeroPageStyle}>
      <Box id="container">
        <Box className="content">
          {location.pathname !== '/templateGenerator' ? (
            <Typography className="hero-title" variant="h1">
              {getValues('hero.title') || 'BIRDIA, le seul outil de diagnostique toiture'}
            </Typography>
          ) : (
            <GenInput name="hero.title" multiline className="hero-title" placeholder="BIRDIA, le seul outil de diagnostique toiture" />
          )}
          <List>
            {((getValues('hero.items') || heroItems) as typeof heroItems).map((items, index) => (
              <ListItem key={items}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <CheckCircleIcon />
                  {location.pathname !== '/templateGenerator' ? (
                    <ListItemText primary={items} />
                  ) : (
                    <GenInput name={`hero.items.${index}`} placeholder="Pas de CB requise" />
                  )}
                </Stack>
              </ListItem>
            ))}
          </List>
          <CTAButton sx={{ mt: 2, mb: 3 }} />
        </Box>
        <Box className="content-image">
          {location.pathname !== '/templateGenerator' ? (
            <Box className="box-image">
              <img src={getValues('hero.image') || heroImage} alt="" />
            </Box>
          ) : (
            <Box className="box-image-template">
              <GenInput inputComponent="input" inputProps={{ accept: 'image/*' } as any} name="hero.image" type="file" />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
