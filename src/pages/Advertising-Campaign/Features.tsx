import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

import { CTAButton } from './components';
import { FeaturesStyle as style } from './styles';

const featuresItemList = [
  {
    src: '/assets/images/advertising/features/hd-image.jpg',
    texts: ["En 1 clic générez l'image ultra HD de toitures.", "Jusqu'à 5cm de précision.", 'Gagner en temps et en précision.'],
  },
  { src: '/assets/images/advertising/features/detection.png', texts: ["Détectez et analysez avec précision tout types d'anomalies."] },
  {
    src: '/assets/images/advertising/features/analyse-report.png',
    texts: ["Obtenez votre Rapport d'Analyse complet et envoyez le à vos clients pour plus d’efficacité."],
  },
];

export const Features = () => {
  return (
    <Box sx={style}>
      <Typography>Nos fonctionnalités</Typography>
      <Box className="card-grid">
        {featuresItemList.map(({ texts, src }, index) => (
          <Card key={src + index}>
            <CardMedia sx={{ height: 200 }} image={src} title={src + index} />
            <CardContent>
              {texts.map((text, index2) => (
                <Typography key={src + index + index2}>{text}</Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>
      <CTAButton />
    </Box>
  );
};
