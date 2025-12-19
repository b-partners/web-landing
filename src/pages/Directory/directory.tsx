import { FC, useState } from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useNavigate, useParams } from 'react-router-dom';

import { Email, Phone } from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { AinAuvergneRAlpesDirectory } from './Ain (Auvergne-R-Alpes)';
import { directoryStyle as style } from './styles';

const userIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
  iconSize: [38, 38],
});

const ChangeLocation: FC<{ coordinates: [number, number] }> = (props) => {
  const map = useMap();
  map.setView(props.coordinates);
  return null;
};

const parisLocation = [48.8581479079253, 2.342225169981041];
export const Directory = () => {
  const [location] = useState<any>(parisLocation as any);
  const { id } = useParams();

  const current = AinAuvergneRAlpesDirectory[id];

  const theme = useTheme();
  const isLessThanLg = useMediaQuery(theme.breakpoints.down('lg'));

  const navigate = useNavigate();

  const handleAskForInvoice = () => navigate('/diagnostic-toiture-particulier');
  const handleTryBirdia = () => window.location.replace('https://dashboard.birdia.fr/');

  return (
    <Box sx={style}>
      <Box className="hero">
        <Box className="hero-left">
          <Stack gap={1} className="hero-left-container">
            <Typography className="title" fontWeight="bold" color="white">
              {current.name}
            </Typography>
            <Box>
              <Button onClick={handleAskForInvoice} variant="contained">
                Demander un devis
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box className="hero-right">
          <Stack className="hero-right-container" gap={1}>
            <Typography className="title">Vous êtes couvreur ?</Typography>
            <Typography>
              Investissez dans une solution intelligente qui automatise l'analyse des images aériennes pour obtenir des évaluations fiables des toitures,
              végétations ou structures.
            </Typography>
            <Box className="button-container">
              <Button onClick={handleTryBirdia} color="secondary" variant="outlined">
                Testez gratuitement Birdia
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Stack direction="row" mt="1rem" className="content" gap={2} position="relative">
        <Box maxWidth={{ xs: '100%', lg: '82vw' }} flexGrow={1} className="content-left">
          <Box className="content-activity" flexWrap="wrap">
            <Box>
              <Typography fontWeight="bold" variant="h4">
                Informations
              </Typography>
              <Typography mt={1} fontWeight="bold" variant="h6">
                Contactes
              </Typography>
              <Stack>
                <Box display="flex" width="fit-content" gap={1} justifyContent="flex-start" alignItems="center">
                  <Phone />
                  <Typography component="a" href={`tel:${current.phone}`}>
                    {current.phone}
                  </Typography>
                </Box>
                <Box display="flex" width="fit-content" gap={1} justifyContent="flex-start" alignItems="center">
                  <Email />
                  <Typography component="a" href={`mailto:${current.email}`}>
                    {current.email}
                  </Typography>
                </Box>
              </Stack>
              <Typography mt={2} fontWeight="bold" variant="h6">
                Adresse
              </Typography>
              <Typography>{current.address}</Typography>
            </Box>
            <Box>
              <Box className="content-other-informations">
                <Typography fontWeight="bold" variant="h4">
                  Activité
                </Typography>
                <Stack direction="row" gap={1} mt={1}>
                  {current.activities.map((activity) => (
                    <Chip color="primary" label={activity} />
                  ))}
                </Stack>
              </Box>
            </Box>
            {isLessThanLg && (
              <Box width="100%" className="content-right">
                <Box className="content-schedules">
                  <Typography fontWeight="bold" variant="h4">
                    Horaires
                  </Typography>
                  <Stack mt={2}>
                    <Box className="bg-neon-light">
                      <Typography>Lundi</Typography>
                      <Typography>08h-19h</Typography>
                    </Box>
                    <Box>
                      <Typography>Mardi</Typography>
                      <Typography>08h-19h</Typography>
                    </Box>
                    <Box className="bg-neon-light">
                      <Typography>Mercredi</Typography>
                      <Typography>08h-19h</Typography>
                    </Box>
                    <Box>
                      <Typography>Jeudi</Typography>
                      <Typography>08h-19h</Typography>
                    </Box>
                    <Box className="bg-neon-light">
                      <Typography>Vendredi</Typography>
                      <Typography>08h-19h</Typography>
                    </Box>
                    <Box>
                      <Typography>Samedi</Typography>
                      <Typography>08h-12h</Typography>
                    </Box>
                    <Box className="bg-neon-light">
                      <Typography>Dimanche</Typography>
                      <Typography>Fermé</Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            )}
          </Box>
          <Box className="content-map-container">
            <Typography fontWeight="bold" mb={2} variant="h5">
              Zone d'intervention
            </Typography>
            <Box className="content-map">
              <MapContainer center={parisLocation as any} zoom={13} scrollWheelZoom={false} style={{ height: '41vh' }}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={location} radius={1500} color="blue" opacity={0.2} />
                <ChangeLocation coordinates={location} />
                <Marker position={location as any} icon={userIcon}>
                  <Popup>Zone d'intervention</Popup>
                </Marker>
              </MapContainer>
            </Box>
          </Box>
        </Box>
        {!isLessThanLg && (
          <Box width="20vw" className="content-right">
            <Box className="content-schedules">
              <Typography fontWeight="bold" variant="h4">
                Horaires
              </Typography>
              <Stack mt={2}>
                <Box className="bg-neon-light">
                  <Typography>Lundi</Typography>
                  <Typography>08h-19h</Typography>
                </Box>
                <Box>
                  <Typography>Mardi</Typography>
                  <Typography>08h-19h</Typography>
                </Box>
                <Box className="bg-neon-light">
                  <Typography>Mercredi</Typography>
                  <Typography>08h-19h</Typography>
                </Box>
                <Box>
                  <Typography>Jeudi</Typography>
                  <Typography>08h-19h</Typography>
                </Box>
                <Box className="bg-neon-light">
                  <Typography>Vendredi</Typography>
                  <Typography>08h-19h</Typography>
                </Box>
                <Box>
                  <Typography>Samedi</Typography>
                  <Typography>08h-12h</Typography>
                </Box>
                <Box className="bg-neon-light">
                  <Typography>Dimanche</Typography>
                  <Typography>Fermé</Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        )}
      </Stack>
    </Box>
  );
};
