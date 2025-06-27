import { Box, Typography } from '@mui/material';

import { RoofDiadnostics } from './styles';
import heroImage from '/assets/images/hero/compiegne.jpg';

export const RoofDiagnostics = () => {
  return (
    <Box component="section" id="template-roof-diagnostics" sx={RoofDiadnostics}>
      <Box id="container-diagnostics">
        <Box className="content">
          <Typography className="title-disagnostics" variant="h2">
            Diagnostique toiture
          </Typography>
          <Typography variant="h6">
            Chez Birdia.fr, nous vous proposons un diagnostic toiture complet pour évaluer l’état de votre couverture, repérer les éventuelles infiltrations,
            dégradations ou défauts d’isolation. Ce service essentiel vous permet d’anticiper les travaux, d'éviter les mauvaises surprises et de prolonger la
            durée de vie de votre toiture. Nos experts interviennent rapidement, avec un rapport détaillé et des recommandations claires.
          </Typography>
          <Typography variant="h6">
            Que vous soyez propriétaire ou futur acquéreur, un diagnostic toiture réalisé par des professionnels qualifiés vous assure une tranquillité
            d’esprit. Grâce à notre expertise et à des outils de pointe, nous détectons les moindres anomalies, visibles ou invisibles à l’œil nu.
          </Typography>
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
