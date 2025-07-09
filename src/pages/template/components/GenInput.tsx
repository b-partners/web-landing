import { ChangeEventHandler, FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Input, InputProps } from '@mui/material';

export const GenInput: FC<InputProps> = (props) => {
  const { setValue, getValues } = useFormContext();
  const [state, setState] = useState(getValues(props.name));

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (props.type === 'file') {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setState(reader.result);
      };

      reader.onerror = (error) => {
        console.error('Erreur lors de la lecture du fichier :', error);
      };
    } else {
      setState(event.target.value);
    }
  };

  const onBlur = () => {
    setValue(props.name, state);
  };

  return <Input onChange={onChange} onBlur={onBlur} value={props.type !== 'file' ? state : undefined} {...props} />;
};
