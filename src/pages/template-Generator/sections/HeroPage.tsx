import { CTAButton } from '@/common/components/buttons';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, List, Input, ListItem, Stack, } from '@mui/material';

import { HeroPageStyle } from './styles';

const heroItems = ['Pas de CB requise', 'Essaie gratuit de 14 jours', "Jusqu'à 38 analyses"];

export const HeroPage = () => {
  return (
    <Box component="section" id="template-HeroPage" sx={HeroPageStyle}>
      <Box id="container">
        <Box className="content">
          <Input className="hero-title" placeholder='BIRDIA, le seul outil de diagnostique toiture'></Input>
          <List>
            {heroItems.map((items) => (
              <ListItem key={items}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <CheckCircleIcon />
                  <Input placeholder='Pas de CB requise'></Input>
                </Stack>
              </ListItem>
            ))}
          </List>
          <CTAButton sx={{ mt: 2, mb: 3 }} />
        </Box>
        <Box className="content-image">
          <Box className="box-image">
            <Input type="file"></Input>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
