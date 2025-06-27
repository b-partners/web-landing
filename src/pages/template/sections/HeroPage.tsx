import { CTAButton } from '@/common/components/buttons';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';

import { HeroPageStyle } from './styles';
import heroImage from '/assets/images/hero/cities.webp';

const heroItems = ['Pas de CB requise', 'Essaie gratuit de 14 jours', "Jusqu'à 38 analyses"];

export const HeroPage = () => {
  return (
    <Box component="section" id="template-HeroPage" sx={HeroPageStyle}>
      <Box id="container">
        <Box className="content">
          <Typography className="title-hero" variant="h1">
            BIRDIA, le seul outil de diagnostique toiture
          </Typography>
          <List>
            {heroItems.map((items) => (
              <ListItem key={items}>
                <Stack direction="row" alignContent="center" spacing={2}>
                  <CheckCircleIcon />
                  <ListItemText primary={items} />
                </Stack>
              </ListItem>
            ))}
          </List>
          <CTAButton sx={{ mt: 2, mb: 3 }} />
        </Box>
        <Box className="content">
          <Box className="image-container">
            <img src={heroImage} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
