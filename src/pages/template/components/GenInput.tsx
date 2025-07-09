import { ChangeEventHandler, FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input, InputProps } from '@mui/material';

export const GenInput: FC<InputProps> = (props) => {
  const { setValue, getValues } = useFormContext();
  const [state, setState] = useState(getValues(props.name));

  const onChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (event) => {
    setState(event.target.value);
  };

  const onBlur = () => {
    setValue(props.name, state);
  };

  return <Input onChange={onChange} onBlur={onBlur} value={state} {...props} />;
};
