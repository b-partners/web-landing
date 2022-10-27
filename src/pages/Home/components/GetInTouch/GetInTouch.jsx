import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import * as PropTypes from 'prop-types';

import { Button } from '../../../../common/components/Button/Button';

export function GetInTouch(props) {
  const useStyles = makeStyles({
    field: {
      width: '80%',
    },
  });

  const classes = useStyles();
  const { onEmailChange, onEmailRegistration, user } = props;

  return (
    <section className="get_in_touch section bd-container">
      <h2 className="get_in_touch__title">Rester informé</h2>
      <p>Aujourd'hui les artisans perdent entre 30% et 40% de leur temps sur des tâches administratives</p>
      <div className="get_in_touch__form">
        <div className='form-wrapper'>
          <TextField
            className={classes.field}
            label="Tapez votre email ici"
            type="mail"
            variant="filled"
            name="email"
            onChange={onEmailChange}
            value={user && user.email}
          />
          <Button type="submit" label="Je m'inscris" preset="get_in_touch__button" onClick={onEmailRegistration} />
        </div>
      </div>
    </section>
  );
}

GetInTouch.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    society: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onEmailChange: PropTypes.bool.isRequired,
  onEmailRegistration: PropTypes.bool.isRequired,
};
