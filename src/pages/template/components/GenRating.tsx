import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { Rating, RatingProps } from '@mui/material';

export const GenRating: FC<RatingProps> = (props) => {
  const { setValue } = useFormContext();
  const value = useWatch();

  const onChange: RatingProps['onChange'] = (_event, value) => {
    setValue(props.name, value);
  };

  return <Rating value={value[props.name]} max={5} sx={{ mb: 2 }} onChange={onChange} {...props} />;
};
