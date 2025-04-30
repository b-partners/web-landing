import { FC } from 'react';

import { BpButton } from '@/common/components/Button';
import { DASHBOARD_LOGIN_URL, DASHBOARD_REGISTRATION_URL } from '@/utils/url';
import { Person as LoginIcon } from '@mui/icons-material';
import { SxProps } from '@mui/material';

export const ButtonActions: FC<{ buttonSx?: SxProps }> = ({ buttonSx }) => {
  return (
    <>
      <BpButton size="small" variant="outlined" sx={{ gap: 0.5, ...buttonSx }} name="login-button" href={DASHBOARD_LOGIN_URL}>
        Se connecter
        <LoginIcon />
      </BpButton>
      <BpButton size="small" name="signup-button" href={DASHBOARD_REGISTRATION_URL} sx={buttonSx}>
        Je m'inscris
      </BpButton>
    </>
  );
};
