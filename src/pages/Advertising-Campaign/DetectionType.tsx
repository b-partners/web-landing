import { Alert, Box, Typography } from '@mui/material';

import { DetectionTypeStyle as style } from './styles';

const detectionItemList = [
  'FISSURES & CASSURES',
  'PRISE DES MESURES',
  'TYPE DE REVÊTEMENT',
  "TAUX D'HUMIDITÉ",
  'USURES & MOISISSURES',
  'INDICE DE PENTE',
  "DELIMITATION D'OBSTACLES",
];

export const DetectionType = () => {
  return (
    <Box sx={style}>
      <Box className="content">
        <Typography>DÉTECTEZ TOUS TYPES D'OBJETS & D'ANOMALIES SUR VOS TOITURES</Typography>
        {detectionItemList.map((value, index) => (
          <Alert icon={false} key={value + index} severity="info">
            {value}
          </Alert>
        ))}
      </Box>
    </Box>
  );
};
