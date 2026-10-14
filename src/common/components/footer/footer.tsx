import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { Env } from '@/common/utils/env';
import { PALETTE_COLORS } from '@/config/theme';
import { Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';

import { FlexBox } from '../flex-box';

const LinkItem: FC<{ to: string; label: string } & Pick<LinkProps, 'to'>> = ({ label, to }) => {
  const external = typeof to === 'string' && /^https?:/.test(to);
  return (
    <Link to={to} {...(external && { target: '_blank', rel: 'noopener noreferrer' })} style={{ fontSize: '1.1rem', textDecoration: 'underline' }}>
      {label}
    </Link>
  );
};

const SocialLinks = () => (
  <>
    <IconButton href="https://www.facebook.com/profile.php?id=100086704691881" aria-label="BIRDIA sur Facebook">
      <Facebook />
    </IconButton>
    <IconButton href="https://www.instagram.com/bpartners_ia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="BIRDIA sur Instagram">
      <Instagram />
    </IconButton>
    <IconButton href="https://www.linkedin.com/company/birdia/posts/?feedView=all&viewAsMember=true" aria-label="BIRDIA sur LinkedIn">
      <LinkedIn />
    </IconButton>
    <IconButton href="https://www.youtube.com/@birdia6145" aria-label="BIRDIA sur YouTube">
      <YouTube />
    </IconButton>
  </>
);

const column = { alignItems: { xs: 'center', md: 'start' }, flexDirection: 'column', gap: 3, flex: 1 } as const;
const legalLink = { textDecoration: 'underline' };

export const Footer = () => (
  <Box
    component="footer"
    sx={{
      '& *': { color: 'var(--cream) !important' },
      width: '100%',
      py: 5,
      px: { xs: 4, md: 8 },
      minHeight: '350px',
      bgcolor: PALETTE_COLORS.pine,
      backgroundImage: { md: "url('/assets/images/logo-pine.png')" },
      backgroundSize: '85%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
      <FlexBox sx={{ ...column, order: { xs: 3, md: 1 }, justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: { xs: '1.5rem', md: '1.2rem' }, fontWeight: 'bold' }}>Contact:</Typography>
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 'bold', textDecoration: 'underline' }}>06 68 62 48 36</Typography>
          <Link to="mailto:contact@birdia.fr" style={{ display: 'block', marginTop: 10, textDecoration: 'underline' }}>
            contact@birdia.fr
          </Link>
        </Box>
        <FlexBox sx={{ gap: 1 }}>
          <SocialLinks />
        </FlexBox>
      </FlexBox>
      <FlexBox sx={{ ...column, order: 1 }}>
        <LinkItem to="/" label="Présentation" />
        <LinkItem to="/a-propos" label="À propos de nous" />
        <LinkItem to="/contact" label="Nous contacter" />
        <LinkItem to={Env.DASHBOARD_LOGIN_URL} label="Mon compte" />
      </FlexBox>
      <FlexBox sx={{ ...column, order: 2 }}>
        <LinkItem to="/blog/post/dpe-toiture" label="DPE Toiture" />
        <LinkItem to="/blog/post/assurance-habitation-préventive" label="Assurance habitation préventive" />
        <LinkItem
          to="/blog/post/valorisation-des-images-pcrs-des-cas-d-usage-concrets-pour-les-collectivitéssous-titre-exploitez"
          label="Valorisation images HD"
        />
        <LinkItem to="/blog/post/impact-écologique-et-entretien-des-toitures-préserver-l-environnement-grâce-à-l-ia" label="Durabilité du bâti" />
        <LinkItem to="/blog/post/impact-écologique-et-entretien-des-toitures-préserver-l-environnement-grâce-à-l-ia" label="Couvreur 2.0" />
      </FlexBox>
    </Box>
    <Divider sx={{ height: '1px', my: 3, bgcolor: PALETTE_COLORS.cream }} />
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column-reverse', md: 'row' },
        alignItems: { xs: 'center', md: 'start' },
        justifyContent: 'space-between',
        gap: 3,
      }}
    >
      <Typography sx={{ fontSize: '1rem' }}>© {new Date().getFullYear()} BIRDIA SAS. All rights reserved.</Typography>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 2, md: 5 } }}>
        <Link to="/mentions-legales" style={legalLink}>
          Mentions Légales
        </Link>
        <Link to="/conditions-generales-d-utilisation" style={legalLink}>
          Conditions générales d'utilisation
        </Link>
        <Link to="/politique-de-confidentialite" style={legalLink}>
          Politique de protection des données
        </Link>
      </Box>
    </Box>
  </Box>
);
