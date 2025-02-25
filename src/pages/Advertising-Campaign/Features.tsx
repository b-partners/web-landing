import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { FeaturesStyle as style } from './styles';

const featuresItemList = [
  { src: '', texts: ["En 1 clic générez l'image ultra HD de toitures.", "Jusqu'à 5cm de précision.", 'Gagner en temps et en précision.'] },
  { src: '', texts: ["Détectez et analysez avec précision tout types d'anomalies."] },
  { src: '', texts: ["Obtenez votre Rapport d'Analyse complet et envoyez le à vos clients pour plus d’efficacité."] },
];

export const Features = () => {
  return (
    <Box sx={style}>
      <Box className='card-grid'>
        {featuresItemList.map(({ texts, src }, index) => (
          <Card key={src + index}>
            <CardMedia sx={{ height: 140 }} image={src} title={src + index} />
            <CardContent>
              {texts.map((text, index2) => (
                <Typography key={src + index + index2}>{text}</Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
