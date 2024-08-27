import { PropsOf } from '@emotion/react';
import { ReactNode } from 'react';

import { TextField } from '@mui/material';

export interface ITextField extends PropsOf<typeof TextField> {
  name: string;
  icon?: ReactNode;
  onClickOnIcon?: () => void;
}
