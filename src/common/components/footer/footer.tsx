import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { PALETTE_COLORS } from '@/config/theme';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';

import { FlexBox } from '../flex-box';

const LinkItem: FC<{ to: string; label: string } & LinkProps> = ({ label, to }) => {
  return (
    <Link to={to} target="_blank" style={{ fontSize: '1.1rem', textDecoration: 'underline' }}>
      {label}
    </Link>
  );
};

const SocialLinkWithLabel = () => (
  <>
    <LinkItem to="/home#home" label="Présentation" />
    <LinkItem to="/about" label="À propos de nous" />
    <LinkItem to="/contact" label="Nous contacter" />
    <LinkItem to={Env.DASHBOARD_LOGIN_URL} label="Mon compte" />
    <Button variant="text" sx={{ p: 0, fontSize: '1.1rem', textDecoration: 'underline' }}>
      Nous recrutons !
    </Button>
  </>
);

const SocialLinks = () => (
  <>
    <IconButton href="https://www.facebook.com/profile.php?id=100086704691881">
      <Facebook />
    </IconButton>
    <IconButton href="https://www.instagram.com/bpartners_ia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
      <Instagram />
    </IconButton>
    <IconButton href="https://www.linkedin.com/company/birdia/posts/?feedView=all&viewAsMember=true">
      <LinkedIn />
    </IconButton>
    <IconButton href="https://www.youtube.com/@birdia6145">
      <YouTube />
    </IconButton>
  </>
);

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (isMobile) {
    return <MdFooter />;
  }

  return (
    <Box component="footer" sx={{ '& *': { color: 'var(--cream) !important' }, width: '100%', py: 5, px: 8, bgcolor: PALETTE_COLORS.pine, minHeight: '350px' }}>
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
              <SocialLinks />
            </FlexBox>
          </FlexBox>
          <FlexBox sx={{ alignItems: 'start', flexDirection: 'column', gap: 4, flex: 1 }}>
            <SocialLinkWithLabel />
          </FlexBox>
          <FlexBox sx={{ alignItems: 'start', flexDirection: 'column', gap: 4, flex: 1 }}>
            <LinkItem to="https://www.birdia.info/post/dpe-toiture" label="DPE Toiture" />
            <LinkItem to="https://www.birdia.info/post/assurance-habitation-pr%C3%A9ventive" label="Assurance habitation préventive" />
            <LinkItem
              to="https://www.bpartners.blog/post/valorisation-des-images-pcrs-des-cas-d-usage-concrets-pour-les-collectivit%C3%A9ssous-titre-exploitez"
              label="Valorisation images HD"
            />
            <LinkItem
              to="https://www.birdia.info/post/impact-%C3%A9cologique-et-entretien-des-toitures-pr%C3%A9server-l-environnement-gr%C3%A2ce-%C3%A0-l-ia"
              label="Durabilité du bâti"
            />
            <LinkItem
              to="https://www.birdia.info/post/impact-%C3%A9cologique-et-entretien-des-toitures-pr%C3%A9server-l-environnement-gr%C3%A2ce-%C3%A0-l-ia"
              label="Couvreur 2.0"
            />
          </FlexBox>
        </FlexBox>
        <Divider sx={{ zIndex: 99, height: '1px', my: 3, bgcolor: PALETTE_COLORS.cream, width: '100%' }} />
        <FlexBox sx={{ zIndex: 99, width: '100%', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '1rem' }}>© 2025 BIRDIA SAS. All rights reserved.</Typography>
          <FlexBox sx={{ gap: 5 }}>
            <Link to="/legal-mention" style={{ textDecoration: 'underline' }}>
              Mentions Légales
            </Link>
            <Link to="/general-conditions-of-use" style={{ textDecoration: 'underline' }}>
              Conditions générales d'utilisation
            </Link>
            <Link to="/privacy-policy" style={{ textDecoration: 'underline' }}>
              Politique de protection des données
            </Link>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Box>
  );
};

const MdFooter = () => {
  return (
    <Box component="footer" sx={{ '& *': { color: 'var(--cream) !important' }, width: '100%', py: 5, px: 4, bgcolor: PALETTE_COLORS.pine, minHeight: '350px' }}>
      <FlexBox sx={{ alignItems: 'center', flexDirection: 'column', gap: 4, flex: 1 }}>
        <SocialLinkWithLabel />
      </FlexBox>
      <FlexBox sx={{ alignItems: 'center', flexDirection: 'column', gap: 4, flex: 1 }}>
        <LinkItem to="https://www.birdia.info/post/dpe-toiture" label="DPE Toiture" />
        <LinkItem to="https://www.birdia.info/post/assurance-habitation-pr%C3%A9ventive" label="Assurance habitation préventive" />
        <LinkItem
          to="https://www.bpartners.blog/post/valorisation-des-images-pcrs-des-cas-d-usage-concrets-pour-les-collectivit%C3%A9ssous-titre-exploitez"
          label="Valorisation images HD"
        />
        <LinkItem
          to="https://www.birdia.info/post/impact-%C3%A9cologique-et-entretien-des-toitures-pr%C3%A9server-l-environnement-gr%C3%A2ce-%C3%A0-l-ia"
          label="Durabilité du bâti"
        />
        <LinkItem
          to="https://www.birdia.info/post/impact-%C3%A9cologique-et-entretien-des-toitures-pr%C3%A9server-l-environnement-gr%C3%A2ce-%C3%A0-l-ia"
          label="Couvreur 2.0"
        />
      </FlexBox>
      <Divider sx={{ zIndex: 99, height: '1px', my: 3, bgcolor: PALETTE_COLORS.cream, width: '100%' }} />
      <FlexBox sx={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', gap: 4, flex: 1 }}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Contact:</Typography>
        <Box sx={{ width: '100%' }}>
          <Typography style={{ textAlign: 'center', fontSize: '1rem', fontWeight: 'bold', textDecoration: 'underline' }}>06 68 62 48 36</Typography>
          <Link to="mailto:contact@bpartners.app" style={{ textAlign: 'center', display: 'block', marginTop: 10, textDecoration: 'underline' }}>
            contact@bpartners.app
          </Link>
        </Box>
        <FlexBox sx={{ color: PALETTE_COLORS.black, gap: 1 }}>
          <SocialLinks />
        </FlexBox>
      </FlexBox>
      <Divider sx={{ zIndex: 99, height: '1px', my: 3, bgcolor: PALETTE_COLORS.cream, width: '100%' }} />
      <FlexBox sx={{ flexDirection: 'column', zIndex: 99, width: '100%', justifyContent: 'space-between' }}>
        <FlexBox sx={{ gap: 2, flexDirection: 'column' }}>
          <Link to="/legal-mention" style={{ textDecoration: 'underline' }}>
            Mentions Légales
          </Link>
          <Link to="/general-conditions-of-use" style={{ textDecoration: 'underline' }}>
            Conditions générales d'utilisation
          </Link>
          <Link to="/privacy-policy" style={{ textDecoration: 'underline' }}>
            Politique de protection des données
          </Link>
        </FlexBox>
        <Typography sx={{ fontSize: '1rem', mt: 3 }}>© 2025 Relume. All rights reserved.</Typography>
      </FlexBox>
    </Box>
  );
};
