import { FC } from 'react';

import { FlexBox } from '@/common/components';
import { SxProps, Typography } from '@mui/material';

import { AnalayseType } from '../utils/constant';

const ANALAYSE_ITEM_SX: SxProps = {
  p: 5,
  flex: 1,
  flexDirection: 'column',
  minHeight: '300px',
  height: '33.33%',
  minWidth: '300px',
};

export const AnalayseItem: FC<{ analyse: AnalayseType }> = ({ analyse }) => {
  return (
    <FlexBox sx={{ ...ANALAYSE_ITEM_SX, bgcolor: analyse.bgcolor }}>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          maxWidth: '640px',
          textAlign: 'center',
          color: analyse.color,
          fontSize: { xs: '1.6rem', sm: '2rem', xl: '2.4rem', xxl: '2.7rem' },
        }}
      >
        {analyse.title}
      </Typography>
      <Typography sx={{ textAlign: 'center', maxWidth: '700px', color: analyse.color, fontSize: '1.5rem', mt: 3 }}>{analyse.description}</Typography>
    </FlexBox>
  );
};
