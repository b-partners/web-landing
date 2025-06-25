import { FC } from 'react';

import { LinkButton } from '@/common/components/buttons';
import { Box, Card, SxProps, Typography } from '@mui/material';

import { TargetType } from '../utils/constant';

const TARGET_ITEM_SX: SxProps = {
  p: 3,
  flex: 1,
  display: 'flex',
  bgcolor: 'white',
  justifyContent: 'space-between',
  borderRadius: '30px',
  flexDirection: 'column',
  minWidth: '350px',
  maxWidth: {
    xs: '550px',
    xxl: '700px',
  },
};

export const TargetItem: FC<{ target: TargetType }> = ({ target }) => {
  return (
    <Card sx={TARGET_ITEM_SX}>
      <Box sx={{ width: '100%' }}>
        <Typography
          variant="h2"
          color="primary"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: {
              xs: '2rem',
              md: '2.3rem',
              xl: '2.5rem',
              xxl: '2.7rem',
            },
          }}
        >
          {target.title}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 600, mt: 3, fontSize: { xs: '1.2rem', md: '1.4rem' }, textAlign: 'center' }}>
          {target.subtitle}
        </Typography>
        {target.description}
      </Box>
      <Box sx={{ width: '100%', mt: 5 }}>
        <img style={{ width: '100%', borderRadius: '30px' }} src={target.img} alt={target.title} title={target.title}/>
        <LinkButton sx={{ mt: 2, px: 8, width: 'fit-content', fontSize: '1.3rem', display: 'block', mx: 'auto' }} to={target.link}>
          Découvrir
        </LinkButton>
      </Box>
    </Card>
  );
};
