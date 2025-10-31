import { FC, useState } from 'react';
import { Circle, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

import { LocationOn } from '@mui/icons-material';
import { Box, Button, Chip, Grid, Stack, Typography } from '@mui/material';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

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
const houilleLocation = [48.92680381284064, 2.1887642439036217];
export const Directory = () => {
  const [location, setLocation] = useState<any>(parisLocation as any);

  return (
    <Box sx={style}>
      <Box className="hero">
        <Box className="hero-left">
          <Stack gap={1} className="hero-left-container">
            <Typography variant="h2" fontWeight="bold" color="white">
              Toitures Robert
            </Typography>
            <Typography color="white" variant="h4">
              SIRET 75119619700022
            </Typography>
            <Box>
              <Button variant="contained">Demander un devis</Button>
            </Box>
          </Stack>
        </Box>
        <Box className="hero-right">
          <Stack className="hero-right-container" gap={1}>
            <Typography variant="h4" className="title">
              Vous êtes couvreur ?
            </Typography>
            <Typography>
              Investissez dans une solution intelligente qui automatise l'analyse des images aériennes pour obtenir des évaluations fiables des toitures,
              végétations ou structures.
            </Typography>
            <Box className="button-container">
              <Button color="secondary" variant="outlined">
                Testez gratuitement Birdia
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Stack direction="row" mt="1rem" className="content" gap={2} position="relative">
        <Box maxWidth={{ xs: '100%', md: '82vw' }} flexGrow={1} className="content-left">
          <Box className="content-activity">
            <Typography fontWeight="bold" variant="h4">
              Activité
            </Typography>
            <Stack direction="row" gap={1} mt={1}>
              <Chip color="primary" label="Construction" />
              <Chip color="primary" label="Couvreurs" />
            </Stack>
          </Box>
          <Box className="content-map-container">
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Box className="content-map-actions">
                  <Typography fontWeight="bold" variant="h4">
                    Zone d'intervention
                  </Typography>
                  <Stack direction="row">
                    <LocationOn />
                    <Typography component="a">83 r Égalités, 78800 Houilles</Typography>
                  </Stack>
                  <Typography variant="h4" mt={2}>
                    Villes d'interventions :
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    <Button onClick={() => setLocation(houilleLocation)} color="secondary" variant="outlined">
                      Houilles
                    </Button>
                    <Button onClick={() => setLocation(houilleLocation)} color="secondary" variant="outlined">
                      Houilles
                    </Button>
                    <Button onClick={() => setLocation(houilleLocation)} color="secondary" variant="outlined">
                      Houilles
                    </Button>
                    <Button onClick={() => setLocation(houilleLocation)} color="secondary" variant="outlined">
                      Paris
                    </Button>
                    <Button onClick={() => setLocation(parisLocation)} color="secondary" variant="outlined">
                      Paris
                    </Button>
                    <Button onClick={() => setLocation(parisLocation)} color="secondary" variant="outlined">
                      Paris
                    </Button>
                    <Button onClick={() => setLocation(parisLocation)} color="secondary" variant="outlined">
                      Paris
                    </Button>
                    <Button onClick={() => setLocation(parisLocation)} color="secondary" variant="outlined">
                      Paris
                    </Button>
                    <Button onClick={() => setLocation(parisLocation)} color="secondary" variant="outlined">
                      Paris
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Box className="content-map">
                  <MapContainer center={parisLocation as any} zoom={13} scrollWheelZoom={false} style={{ height: '41vh' }}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Circle center={location} radius={1000} color="blue" opacity={0.2} />
                    <ChangeLocation coordinates={location} />
                    <Marker position={location as any} icon={userIcon}>
                      <Popup>Zone d'intervention</Popup>
                    </Marker>
                  </MapContainer>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
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
          <Box className="content-other-informations">
            <Typography fontWeight="bold" variant="h4">
              Autres Informations
            </Typography>
            <Typography mt={1} fontWeight="bold" variant="h6">
              Types de prestations
            </Typography>
            <Typography>Déplacement chez le client</Typography>
            <Typography mt={1} fontWeight="bold" variant="h6">
              Éligible service à la personne
            </Typography>
            <Typography>Non</Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
