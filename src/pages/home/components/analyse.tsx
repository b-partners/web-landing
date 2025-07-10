import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { FlexBox } from '@/common/components';
import { CTAButton, LinkButton } from '@/common/components/buttons';
import { Env } from '@/common/utils/env';
import { PALETTE_COLORS } from '@/config/theme';
import { SxProps, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { GenInput } from '@pages/template/components/GenInput';

import analyseCarousel from '../assets/images/analyses-carousel/1.webp';
import { ANALYSES } from '../utils/constant';
import { AnalayseItem } from './analyse-item';

const ANALAYSE_SX: SxProps = {
  alignItems: 'stretch',
  flexWrap: 'wrap',
};

interface AnalayseProps {
  analayseData?: any;
}

export const Analayse: FC<AnalayseProps> = (props) => {
  const { analayseData } = props;
  const location = useLocation();
  const isEditMode = location.pathname === '/templateGenerator';

  const rawImage = analayseData?.image;
  const analyseImageUrl = rawImage instanceof File ? URL.createObjectURL(rawImage) : rawImage || analyseCarousel;

  const titreAnalyse = analayseData?.title || 'Analyse automatisée de toitures par intelligence artificielle';
  const explication =
    analayseData?.explication ||
    `Détection, qualification et recommandation à partir d’images aériennes HD.\nEn un clic, obtenez un diagnostic métier précis sans monter sur le toit.`;

  return (
    <FlexBox component="section" sx={ANALAYSE_SX}>
      <Box sx={{ flex: 1 }}>
        {((analayseData?.information || ANALYSES) as typeof ANALYSES).map((analyse, index) => {
          return isEditMode ? (
            <Box key={index} sx={{ px: 3, py: 5, bgcolor: analyse.bgcolor }}>
              <GenInput
                name={`analyse.information.${index}.title`}
                placeholder="Titre de l'analyse"
                sx={{ mb: 1, fontWeight: 'bold', fontSize: '1.1rem', color: analyse.color }}
              />
              <GenInput
                name={`analyse.information.${index}.description`}
                fullWidth
                placeholder="Texte de l'analyse"
                sx={{ fontSize: '1rem', color: analyse.color }}
              />
            </Box>
          ) : (
            <AnalayseItem key={analyse.title} analyse={analyse} index={index} />
          );
        })}
      </Box>
      <FlexBox sx={{ flexDirection: 'column', px: 6, flex: 1, bgcolor: 'white', p: 5, minWidth: '700px' }}>
        {isEditMode ? (
          <GenInput
            name="analayse.title"
            multiline
            placeholder="Analyse automatisée de toitures par intelligence artificielle"
            sx={{
              maxWidth: '1000px',
              mx: 'auto',
              width: { xs: '90%', md: '100%' },
              px: { xs: 5, md: 0 },
              textAlign: 'center',
              color: PALETTE_COLORS.neon_orange,
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem', xl: '3rem', xxl: '4rem' },
            }}
          />
        ) : (
          <Typography
            variant="h2"
            sx={{
              maxWidth: '1000px',
              mx: 'auto',
              width: { xs: '90%', md: '100%' },
              px: { xs: 5, md: 0 },
              textAlign: 'center',
              color: PALETTE_COLORS.neon_orange,
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '2.5rem', xl: '3rem', xxl: '4rem' },
            }}
          >
            {titreAnalyse}
          </Typography>
        )}
        {isEditMode ? (
          <GenInput
            name="analyse.explication"
            multiline
            placeholder="Détection, qualification et recommandation à partir d’images aériennes HD. En un clic, obtenez un diagnostic métier précis sans monter sur le toit."
            sx={{
              width: { xs: '60%', md: '100%' },
              fontSize: { xs: '1rem', xl: '1.3rem' },
              textAlign: 'center',
              mt: 5,
              maxWidth: '1200px',
              mx: 'auto',
            }}
          />
        ) : (
          <Typography
            sx={{
              width: { xs: '60%', md: '100%' },
              fontSize: { xs: '1rem', xl: '1.3rem' },
              textAlign: 'center',
              mt: 5,
              maxWidth: '1200px',
              mx: 'auto',
              whiteSpace: 'pre-line',
            }}
          >
            {explication}
          </Typography>
        )}
        <FlexBox sx={{ mt: 3 }}>
          {isEditMode ? (
            <GenInput inputComponent="input" inputProps={{ accept: 'image/*' } as any} name="analyse.image" type="file" />
          ) : (
            <img
              src={analyseImageUrl}
              alt="Illustration : Analyse automatisée de toitures par intelligence artificielle"
              style={{
                width: '55%',
                marginTop: '30px',
                display: 'block',
                marginInline: 'auto',
                borderRadius: '30px',
                objectFit: 'cover',
              }}
            />
          )}
        </FlexBox>
        <FlexBox sx={{ my: 5, gap: 4 }}>
          <CTAButton />
          <LinkButton
            variant="outlined"
            sx={{
              borderColor: PALETTE_COLORS.forest,
              color: PALETTE_COLORS.forest,
              '&:hover': { color: PALETTE_COLORS.cream, borderColor: PALETTE_COLORS.pine, bgcolor: PALETTE_COLORS.pine },
            }}
            to={Env.DASHBOARD_REGISTRATION_URL}
          >
            Testez sans engagement
          </LinkButton>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};
