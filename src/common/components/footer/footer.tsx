import { FC } from 'react';
import { Link } from 'react-router-dom';

import { PALETTE_COLORS } from '@/config/theme';
import { Facebook, Instagram, LinkedIn, X, YouTube } from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';

import { FlexBox } from '../flex-box';

const LinkItem: FC<{ to: string; label: string }> = ({ label, to }) => {
  return (
    <Link to={to} target="_blank" style={{fontSize: "1.1rem", textDecoration: 'underline' }}>
      {label}
    </Link>
  );
};

export const Footer = () => {
  return (
    <Box component="footer" sx={{ '& *': { color: 'black !important' }, width: '100%', py: 5, px: 8, bgcolor: PALETTE_COLORS.pine, minHeight: '350px' }}>
      <FlexBox sx={{ flexDirection: 'column', position: 'relative', width: '1OO%', minHeight: '350px', height: '100%' }}>
        <FlexBox
          sx={{
            top: 0,
            left: 0,
            zIndex: 9,
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundSize: '85%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url('/assets/images/logo-pine.png')",
          }}
        />
        <FlexBox sx={{ width: '100%', justifyContent: 'start', alignItems: 'stretch', zIndex: 99 }}>
          <FlexBox sx={{ alignItems: 'start', flexDirection: 'column', justifyContent: 'space-between', gap: 4, flex: 1 }}>
            <Typography sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Contact:</Typography>
            <Box sx={{ width: '100%' }}>
              <Typography style={{ fontSize: '1rem', fontWeight: 'bold', textDecoration: 'underline' }}>06 68 62 48 36</Typography>
              <Link to="mailto:contact@bpartners.app" style={{ textDecoration: 'underline' }}>
                contact@bpartners.app
              </Link>
            </Box>
            <FlexBox sx={{ color: PALETTE_COLORS.black, gap: 1 }}>
              <IconButton href="/home">
                <Facebook />
              </IconButton>
              <IconButton href="/home">
                <Instagram />
              </IconButton>
              <IconButton href="/home">
                <X />
              </IconButton>
              <IconButton href="/home">
                <LinkedIn />
              </IconButton>
              <IconButton href="/home">
                <YouTube />
              </IconButton>
            </FlexBox>
          </FlexBox>
          <FlexBox sx={{ alignItems: 'start', flexDirection: 'column', gap: 4, flex: 1 }}>
            <LinkItem to="/home" label="link1" />
            <LinkItem to="/home" label="link2" />
            <LinkItem to="/home" label="link3" />
            <LinkItem to="/home" label="link4" />
            <LinkItem to="/home" label="link5" />
          </FlexBox>
          <FlexBox sx={{ alignItems: 'start', flexDirection: 'column', gap: 4, flex: 1 }}>
            <LinkItem to="/home" label="link1" />
            <LinkItem to="/home" label="link2" />
            <LinkItem to="/home" label="link3" />
            <LinkItem to="/home" label="link4" />
            <LinkItem to="/home" label="link5" />
          </FlexBox>
        </FlexBox>
        <Divider sx={{ zIndex: 99, height: '1px', my: 3, bgcolor: PALETTE_COLORS.cream, width: '100%' }} />
        <FlexBox sx={{ zIndex: 99, width: '100%', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1rem' }}>© 2025 Relume. All rights reserved.</Typography>
          <FlexBox sx={{ gap: 5 }}>
            <Link to="#" style={{ textDecoration: 'underline' }}>
              Privacy Policy
            </Link>
            <Link to="#" style={{ textDecoration: 'underline' }}>
              Terms of Service
            </Link>
            <Link to="#" style={{ textDecoration: 'underline' }}>
              Cookies Settings
            </Link>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};
