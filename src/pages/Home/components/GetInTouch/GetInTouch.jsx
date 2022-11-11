import React from 'react';

import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import * as PropTypes from 'prop-types';

import { Button } from '../../../../common/components/Button/Button';
import WavesBottomBg from '../../assets/img/waves-bottom-bg.png';

export function GetInTouch(props) {
  const useStyles = makeStyles({
    field: {
      width: '80%',
    },
  });

  const classes = useStyles();
  const { onEmailChange, onEmailRegistration, user } = props;

  return (
    <section className="get_in_touch section">
      <img
        src={WavesBottomBg}
        alt=" "
        style={{
          position: 'absolute',
          zIndex: '-1',
          left: '0',
          top: '-.05rem',
        }}
      />
      <div className="bd-container section">
        <h2 className="get_in_touch__title">Rester informé</h2>
        <p style={{ marginBlock: '1.3rem' }}>
          Aujourd'hui les artisans perdent entre 30% et 40% de leur temps sur des tâches administratives.
        </p>
        <div className="get_in_touch__form">
          <div className="form-wrapper">
            <TextField
              className={classes.field}
              label="Email"
              type="mail"
              variant="filled"
              name="email"
              onChange={onEmailChange}
              value={user && user.email}
            />
            <Button type="submit" label="Je m'inscris" preset="get_in_touch__button" onClick={onEmailRegistration} />
          </div>
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
  onEmailChange: PropTypes.func.isRequired,
  onEmailRegistration: PropTypes.func.isRequired,
};
