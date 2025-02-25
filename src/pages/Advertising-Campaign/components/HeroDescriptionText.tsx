import { FC, ReactNode } from 'react';

import { CheckCircleOutline, CreditCard } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { HeroDescriptionTextStyle as style } from './styles';

type MenuProps = {
  icon: ReactNode;
  text: string;
};

const Menu: FC<MenuProps> = ({ icon, text }) => {
  return (
    <Box className="menu">
      <Box className="menu-icon-container">{icon}</Box>
      <Typography>{text}</Typography>
    </Box>
  );
};

const menuItemList = [
  { icon: <CreditCard />, text: 'Pas de CB requise' },
  {
    icon: (
      <Box className="free-icon-container">
        <Typography>Free</Typography>
      </Box>
    ),
    text: 'Essai gratuit 14 jours',
  },
  { icon: <CheckCircleOutline />, text: "Jusqu'à 20 analyses comprises" },
];

export const HeroDescriptionText = () => {
  return (
    <Box sx={style}>
      <Box className="description-title-container">
        <Typography>
          {`Découvrez `}
          <img alt="Bp IA Logo" src="/assets/images/bp-ia-logo.png" />
          {` le seul outil de Détection et d'Analyse de Toitures.`}
        </Typography>
      </Box>
      {menuItemList.map(({ icon, text }) => (
        <Menu key={text} icon={icon} text={text} />
      ))}
    </Box>
  );
};
