import { PALETTE_COLORS } from '@/config/theme';
import { Box, Typography } from '@mui/material';

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
        <Typography>DÉTECTEZ TOUS TYPES D'OBJETS & ANOMALIES SUR VOS TOITURES</Typography>
        {detectionItemList.map((value, index) => (
          <Box key={value + index} sx={{ bgcolor: PALETTE_COLORS.pine, my: 1, py: 1, borderRadius: '8px', width: '80%' }}>
            <Typography sx={{ fontSize: '1.2rem', textAlign: 'center', color: PALETTE_COLORS.white }}>{value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
