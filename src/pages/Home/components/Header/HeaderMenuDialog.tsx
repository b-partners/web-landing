import { Link } from 'react-router-dom';

import { BpButton } from '@/common/components/Button';
import { Close as CloseIcon } from '@mui/icons-material';
import { Box, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import { useDialog } from '@store/dialog';

import { HeaderMenuDialogStyle, links } from '.';

const DASHBOARD_URL = 'https://dashboard.bpartners.app/login';

export const HeaderMenuDialog = () => {
  const { close: closeDialog } = useDialog();
  return (
    <Box sx={HeaderMenuDialogStyle}>
      <Stack direction="row">
        <DialogTitle>Menu</DialogTitle>
        <IconButton onClick={closeDialog}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <DialogContent>
        <Stack spacing={1}>
          {links.map(({ to, label }) => (
            <Link key={to} to={to}>
              <BpButton sx={{ width: '50vw', paddingBlock: 1 }}>{label}</BpButton>
            </Link>
          ))}
          <BpButton sx={{ width: '50vw', paddingBlock: 1 }} variant="outlined" href={DASHBOARD_URL}>
            Se Connecter
          </BpButton>
        </Stack>
      </DialogContent>
    </Box>
  );
};
