import { FC, ReactNode } from 'react';

import { BpButton } from '@/common/components/Button';
import { BP_COLOR } from '@/config';
import { Box, Divider, SxProps, Typography } from '@mui/material';

import theyTalkAboutUs from '../../assets/they-talk-about-us.png';

export type TestimonialItemProps = {
  title: {
    underlined: string;
    simple?: string;
  };
  children?: ReactNode;
  content: string;
  redirect: string;
};

const CONTENT_SX: SxProps = {
  fontSize: '1.2rem',
  maxWidth: '1000px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'black',
  opacity: 0.9,
};

export const TestimonialItem: FC<TestimonialItemProps> = ({ title, redirect, children, content }) => {
  return (
    <Box sx={{ width: '95%', mx: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <img src={theyTalkAboutUs} style={{ display: 'block', width: 'fit-content' }} />
      <Typography variant="h4" sx={{ color: 'black', textAlign: 'center', opacity: 0.9, fontSize: '1rem', fontWeight: 'bold', mt: 1 }}>
        <span style={{ textDecoration: 'underline' }}>{title.underlined}</span> {title.simple}
      </Typography>
      <Divider sx={{ width: '300px', my: 3, bgcolor: BP_COLOR['5'], height: '2px' }} />
      <Typography sx={CONTENT_SX}>{content}</Typography>
      {children}
      <BpButton sx={{ mt: 4, mb: 2 }} disabled={false} href={redirect}>
        En savoir plus
      </BpButton>
    </Box>
  );
};
