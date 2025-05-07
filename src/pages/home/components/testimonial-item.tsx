import { FC, useMemo } from 'react';

import { FlexBox } from '@/common/components';
import { PALETTE_COLORS } from '@/config/theme';
import { Star } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';

import { Testimonial } from '../utils/constant';

export const TestimonialItem: FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const stars = useMemo(() => new Array(testimonial.star).fill(0), [testimonial.star]);

  return (
    <Box sx={{ pr: 5, pb: 7 }}>
      <FlexBox
        sx={{
          p: 5,
          gap: 2,
          width: '100%',
          bgcolor: 'white',
          alignItems: 'start',
          justifyContent: 'start',
          flexDirection: 'column',
          borderWidth: '1px',
          minHeight: '300px',
          borderStyle: 'solid',
          borderRadius: '30px',
          borderColor: PALETTE_COLORS.forest,
        }}
      >
        <FlexBox sx={{ width: '100%', justifyContent: 'start', gap: 2 }}>
          {stars.map((star) => (
            <Star key={star.name} color="primary" />
          ))}
        </FlexBox>
        <Typography sx={{ my: 1, maxWidth: '700px' }}>"{testimonial.content}"</Typography>
        <FlexBox sx={{ justifyContent: 'start', gap: 3 }}>
          <Avatar src={testimonial.avatar} alt={testimonial.name} />
          <Box>
            <Typography sx={{ fontWeight: 'bold' }}>{testimonial.name}</Typography>
            <Typography>{testimonial.job}</Typography>
          </Box>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};
