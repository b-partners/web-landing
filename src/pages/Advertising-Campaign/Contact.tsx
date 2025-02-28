import { Email, Facebook, Instagram, LinkedIn, LocationOn, Phone } from '@mui/icons-material';
import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';

import { ContactStyle as style } from './styles';

const contactItemsList = [
  {
    icon: <LocationOn />,
    value: '14 rue Soleillet, 75020',
    link: 'https://www.google.com/maps/place/14+Rue+Soleillet,+75020+Paris,+France/@48.865451,2.3908494,19z',
  },
  {
    icon: <Phone />,
    value: '06.68.62.48.36',
    link: 'tel:06.68.62.48.36',
  },
  {
    icon: <Email />,
    value: 'contact@bpartners.app',
    link: 'mailTo:contact@bpartners.app',
  },
];

export const Contact = () => {
  const open = (url: string) => () => window.open(url, '_blank');

  return (
    <Box sx={style}>
      <Divider />
      <Typography>Contacts</Typography>
      <Stack direction="row" justifyContent="space-around">
        {contactItemsList.map(({ icon, link, value }) => (
          <Button startIcon={icon} onClick={open(link)} key={link}>
            {value}
          </Button>
        ))}
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <Typography>Suivez-nous</Typography>
          <Box>
            <IconButton onClick={open('https://www.instagram.com/bpartners_ia')}>
              <Instagram />
            </IconButton>
            <IconButton onClick={open('https://www.facebook.com/p/BPartners-artisans-ind%C3%A9pendants-100086704691881/?_rdr')}>
              <Facebook />
            </IconButton>
            <IconButton onClick={open('https://www.linkedin.com/company/bpartners-ia/posts/?feedView=all')}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Stack>
        <Stack>
          <img alt="b-logo" src="/assets/images/b-logo.png" />
        </Stack>
      </Stack>
    </Box>
  );
};
