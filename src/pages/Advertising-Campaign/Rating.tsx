import { PALETTE_COLORS } from '@/config/theme';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';

import { RatingStyle as style } from './styles';

const RATE_ITEM_LIST = [
  {
    title: 'Gain de temps',
    comment:
      "Je gère seul mon activité et BIRDIA me permet de faire l'analyse des toits automatiquement, avec toutes les mesures pour anticiper mon intervention. Mes clients reçoivent le projet de réparation en moins de 24H",
    user: 'Jason H. Couvreur dans le 77',
  },
  {
    title: 'Efficace',
    comment: "Ma façon de travailler a changer depuis que j'utilise le logiciel de BIRDIA. Un gain de temps énorme, et c'est ultra précis. Je recommande!",
    user: 'Jean-Pierre Couvreur à Lyon',
  },
] as const;

export const Rating = () => {
  return (
    <Box sx={style}>
      <Typography sx={{ color: PALETTE_COLORS.neon_orange }}>CE QU’EN PENSENT NOS ARTISANS COUVREURS</Typography>
      <Box className="rating-items-list">
        {RATE_ITEM_LIST.map(({ comment, title, user }) => (
          <Card sx={{ borderRadius: '8px', p: 2 }} key={title}>
            <CardHeader title={`"${title}"`} titleTypographyProps={{ sx: { color: PALETTE_COLORS.pine, fontWeight: 'bold' } }} />
            <CardContent>
              <Typography>{comment}</Typography>
              <Typography sx={{ fontWeight: 'bold' }}>{user}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
