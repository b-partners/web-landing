import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import { CircularProgress } from '@mui/material';

import './Button.css';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  loading?: boolean;
  preset?: string;
  label?: string;
};

export const Button: FC<ButtonProps> = ({ loading = false, type = 'button', id = '', preset = 'btn-primary', label = 'Valider', onClick }) => {
  return (
    <button type={type} className={`btn ${preset}`} onClick={onClick} id={id}>
      {loading ? (
        <>
          <CircularProgress size="1em" color="inherit" sx={{ mr: 1, verticalAlign: 'middle' }} />
          {label}
        </>
      ) : (
        label
      )}
    </button>
  );
};
