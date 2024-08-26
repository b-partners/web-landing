import { useNavigate } from 'react-router-dom';

import { BpButton } from '@/common/components/Button';
import { Close as CloseIcon } from '@mui/icons-material';
import { Box, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import { useDialog } from '@store/dialog';

import { HeaderMenuDialogStyle, links } from '.';
import { ButtonActions } from './ButtonActions';

export const HeaderMenuDialog = () => {
  const { close: closeDialog } = useDialog();
  const navigate = useNavigate();

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
          {links
            .filter((link) => link.label !== 'Blog')
            .map(({ to, label }) => (
              <BpButton
                sx={{ width: '50vw', paddingBlock: 1 }}
                onClick={() => {
                  navigate(to);
                  closeDialog();
                }}
              >
                {label}
              </BpButton>
            ))}
          <BpButton sx={{ width: '50vw', paddingBlock: 1 }} href={process.env.REACT_APP_BLOG_URL}>
            Blog
          </BpButton>
        </Stack>
        <ButtonActions buttonSx={{ width: '100%', mt: 1, py: 0.8 }} />
      </DialogContent>
    </Box>
  );
};
