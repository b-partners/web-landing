import { useFormContext } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { GenInput } from '../components/GenInput';
import { RoofDiagnosticsStyle } from './styles';
import heroImage from '/assets/images/hero/compiegne.jpg';

export const RoofDiagnostics = () => {
  const location = useLocation();
  const { getValues } = useFormContext();
  return (
    <Box component="section" id="template-roof-diagnostics" sx={RoofDiagnosticsStyle}>
      <Box id="diagnostics-container">
        <Box className="content-text">
          {location.pathname !== '/templateGenerator' ? (
            <Typography className="diagnostics-title" variant="h2">
              {getValues('roofDiagnostics.title') || 'Diagnostique toiture'}
            </Typography>
          ) : (
            <GenInput name="roofDiagnostics.title" className="diagnostics-title" placeholder="Diagnostique toiture" />
          )}
          {location.pathname !== '/templateGenerator' ? (
            <Typography variant="h6" className="diagnostics-description">
              {getValues('roofDiagnostics.description1') ||
                `Chez Birdia.fr, nous vous proposons un\u00A0diagnostic toiture\u00A0complet pour évaluer l’état de votre couverture, repérer les éventuelles infiltrations,
            dégradations ou défauts d’isolation. Ce service essentiel vous permet d’anticiper les travaux, d'éviter les mauvaises surprises et de prolonger la
            durée de vie de votre toiture.\u00A0Nos experts interviennent rapidement, avec un rapport détaillé et des recommandations claires.`}
            </Typography>
          ) : (
            <GenInput name="roofDiagnostics.description1" className="diagnostics-description" placeholder="Description 1" />
          )}
          {location.pathname !== '/templateGenerator' ? (
            <Typography variant="h6" className="diagnostics-description">
              {getValues('roofDiagnostics.description2') ||
                `Que vous soyez propriétaire ou futur acquéreur, un diagnostic toiture réalisé par des professionnels qualifiés vous assure une tranquillité
            d’esprit.\u00A0Grâce à notre expertise et à des outils de pointe, nous détectons les moindres anomalies, visibles ou invisibles à l’œil nu.`}
            </Typography>
          ) : (
            <GenInput name="roofDiagnostics.description2" className="diagnostics-description" placeholder="Description 1" />
          )}
        </Box>
        <Box className="content-img">
          <Box className="image-container">
            {location.pathname !== '/templateGenerator' ? (
              <img src={getValues('roofDiagnostics.image') || heroImage} alt="" />
            ) : (
              <GenInput inputComponent="input" inputProps={{ accept: 'image/*' } as any} name="roofDiagnostics.image" type="file" />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
