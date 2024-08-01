import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { IconButton, TextField as MuiTextField } from '@mui/material';

import { ITextField } from './types';

export const TextField: FC<ITextField> = ({ name, icon, onClickOnIcon, type, ...others }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const value = useWatch({ name });

  const endAdornment = icon && <IconButton onClick={onClickOnIcon}>{icon}</IconButton>;

  return (
    <MuiTextField
      {...register(name)}
      value={value}
      type={type}
      error={!!errors[name]}
      inputProps={{ icon, 'data-cy': `${name}-input` }}
      helperText={(errors[name]?.message as string) || ''}
      InputProps={{ endAdornment }}
      {...others}
    />
  );
};
