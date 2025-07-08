import { ChangeEventHandler, FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Input, InputProps } from '@mui/material';

export const GenInput: FC<InputProps> = (props) => {
  const { setValue } = useFormContext();
  const value = useWatch();

  const onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
    setValue(props.name, event.target.value);
  };

  return <Input onChange={onChange} value={value[props.name]} {...props} />;
};
