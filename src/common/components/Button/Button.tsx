import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

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
          <i className="fa fa-spinner fa-spin" />
          {label}
        </>
      ) : (
        label
      )}
    </button>
  );
};
