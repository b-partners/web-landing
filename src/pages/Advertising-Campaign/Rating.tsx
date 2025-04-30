import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';

import { RatingStyle as style } from './styles';

const rateItemList = [
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
];

export const Rating = () => {
  return (
    <Box sx={style}>
      <Typography>CE QU’EN PENSENT NOS ARTISANS COUVREURS</Typography>
      <Box className="rating-items-list">
        {rateItemList.map(({ comment, title, user }) => (
          <Card key={title}>
            <CardHeader title={`"${title}"`} />
            <CardContent>
              <Typography>{comment}</Typography>
              <Typography>{user}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
