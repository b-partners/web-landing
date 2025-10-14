import { FC, useEffect, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { AdCtaButton, CTAButton } from '@/common/components/buttons';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, List, ListItem, Stack, Typography } from '@mui/material';

import { GenInput } from '../components/GenInput';
import { HeroPageStyle } from './styles';
import heroImage from '/assets/images/hero/cities.webp';

const heroItems = ['Pas de CB requise', 'Essaie gratuit de 14 jours', "Jusqu'à 38 analyses"];

interface Props {
  text: string;
  index: number;
}

const HeroList: FC<Props> = ({ text, index }) => {
  const location = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = text;
    }
  });
  return (
    <ListItem>
      <Stack direction="row" alignItems="center" spacing={2}>
        <CheckCircleIcon />
        {location.pathname !== '/templateGenerator' ? (
          <Typography ref={ref}>{text}</Typography>
        ) : (
          <GenInput name={`hero.items.${index}`} placeholder="Pas de CB requise" />
        )}
      </Stack>
    </ListItem>
  );
};

export const HeroPage = () => {
  const location = useLocation();
  const { getValues } = useFormContext();
  const heroImg = getValues('hero.image');
  const imageUrl = heroImg instanceof File ? URL.createObjectURL(heroImg) : heroImg || heroImage;
  const isDiagnosticAvantVente = location.pathname === '/diagnostic-toiture-particulier';
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
            {((getValues('hero.items') || heroItems) as typeof heroItems).map((item, index) => (
              <HeroList key={item} index={index} text={item} />
            ))}
          </List>
          {!isDiagnosticAvantVente && <CTAButton sx={{ mt: 2, mb: 3 }} />}
        </Box>
        <Box className="content-image">
          {location.pathname !== '/templateGenerator' ? (
            <img src={imageUrl} alt="Illustration Hero" />
          ) : (
            <Box className="box-image-template">
              <GenInput inputComponent="input" inputProps={{ accept: 'image/*' } as any} name="hero.image" type="file" />
            </Box>
          )}
        </Box>
      </Box>
      {isDiagnosticAvantVente && (
        <Box className='ad-cta-container'>
          <AdCtaButton className="ad-cta-button" />
        </Box>
      )}
    </Box>
  );
};
