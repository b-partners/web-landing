import { FC, ReactNode } from 'react';

import { BP_COLOR } from '@/config';
import { Box, Divider, Link, SxProps, Typography } from '@mui/material';

import theyTalkAboutUs from '../../assets/they-talk-about-us.png';

export type TestimonialItemProps = {
  title: {
    underlined: string;
    simple?: string;
  };
  children?: ReactNode;
  content: string;
  redirect: string;
  linkSx?: SxProps;
};

const CONTENT_SX: SxProps = {
  fontSize: '1.2rem',
  maxWidth: '1000px',
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'inherit',
};

export const TestimonialItem: FC<TestimonialItemProps> = ({ title, redirect, children, content, linkSx = {} }) => {
  return (
    <Box
      sx={{
        width: '95%',
        mx: 'auto',
        display: 'flex',
        color: '#281A39',
        alignItems: 'center',
        flexDirection: 'column',
        '& .they-talk-about-us': { minWidth: '198px !important', maxWidth: '198px !important', borderRadius: '0% !important' },
      }}
    >
      <img className="they-talk-about-us" src={theyTalkAboutUs} alt="theyTalkAboutUs" style={{ marginLeft: "70px", display: 'block', width: 'fit-content' }} />
      <Typography variant="h4" sx={{ textAlign: 'center', color: 'inherit', fontSize: '1rem', fontWeight: 'bold', mt: 1 }}>
        <span style={{ textDecoration: 'underline' }}>{title.underlined}</span> {title.simple}
      </Typography>
      <Divider sx={{ width: '300px', my: 3, bgcolor: BP_COLOR['5'], height: '2px' }} />
      <Typography sx={CONTENT_SX}>{content}</Typography>
      {children}
      <Link
        sx={{
          mt: 4,
          mb: 2,
          bgcolor: BP_COLOR['5'],
          fontWeight: 'bold',
          color: 'white',
          borderRadius: '30px',
          px: 3,
          py: 1,
          opacity: 0.9,
          transition: 'background-color .5s linear',
          '&:hover': { opacity: 1 },
          ...linkSx,
        }}
        underline="none"
        target="_blank"
        rel="noreferrer"
        href={redirect}
      >
        En savoir plus
      </Link>
    </Box>
  );
};
