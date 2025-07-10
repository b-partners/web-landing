import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Rating, RatingProps } from '@mui/material';

export const GenRating: FC<RatingProps> = (props) => {
  const { setValue, getValues } = useFormContext();
  const [star, setStar] = useState(getValues(props.name));

  const onChange: RatingProps['onChange'] = (_event, value) => {
    setStar(value);
    setValue(props.name, value);
  };

  return <Rating value={star} max={5} sx={{ mb: 2 }} onChange={onChange} {...props} />;
};
