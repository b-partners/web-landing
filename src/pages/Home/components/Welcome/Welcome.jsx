/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { makeStyles } from '@mui/styles';

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import * as PropTypes from 'prop-types';

import { Button } from '../../../../common/components/Button';
import { IconList } from '../../../../common/components/IconList';
import '../../../../common/components/Modal/Modal.css';
import '../../assets/css/forms.css';
import '../../assets/css/spinner.css';
import CashRegisterEuro from '../../assets/img/cash-register-euro.png';
import PaidBill from '../../assets/img/paid-bill.png';
import QrCode from '../../assets/img/qr-code-ext.png';
import VirtualBot from '../../assets/img/virtual-bot.png';
import WelcomeSectionBg from '../../assets/img/welcome-waves.png';

export function Welcome(props) {
  const { onEmailChange, onEmailRegistration, user } = props;

  const useStyles = makeStyles({
    field: {
      width: '60%',
      height: 'inherit',
      overflow: 'hidden',
      borderRadius: '25px 0px 0px 25px'
    },
  });

  const classes = useStyles();

  return (
    <section className="home" id="home">
      <img
        src={WelcomeSectionBg}
        alt=" "
        style={{
          position: 'absolute',
          bottom: '-.05rem',
        }}
      />
      <h1 className="home__title bd-container">
        L'assistant intelligent qui accélère<br />
        <span style={{ fontWeight: '600' }}>
          la croissance des artisans français.
        </span>
      </h1>
      <div className="home__container bd-container bd-grid">
        <div className="home__data">
          <div className="home__list">
            <div className="home__list__col">
              <ul>
                <IconList imageSrc={CashRegisterEuro} listText="Suivi de votre trésorerie et de vos objectifs." />
                <IconList
                  imageSrc={PaidBill}
                  listText="Édition de devis, facture et relance automatisée des impayés."
                />
              </ul>
            </div>
            <div className="home__list__col">
              <ul>
                <IconList imageSrc={QrCode} listText="Encaissement de vos prestations sur mobile et à distance." />
                <IconList
                  imageSrc={VirtualBot}
                  listText="Identification en temps réel des chantiers,
               et des demande de dépannages autour de chez vous."
                />
              </ul>
            </div>
          </div>
          <Paper elevation={5} className="home-registration-form"
            sx={{
              padding: '20px'
            }}
          >
            <h2 className="registration-title">
              Renseignez votre mail et <br />
              rejoignez les artisans de demain.
            </h2>
            <div className='home-registration-mail'>
              <TextField
                className={classes.field}
                name="email"
                label="Email"
                type="mail"
                variant="filled"
                onChange={onEmailChange}
                value={user && user.email}
                required
              />
              <Button
                type="button"
                label="Ça m'interesse"
                preset="home-registration-button"
                onClick={onEmailRegistration}
              />
            </div>
          </Paper>
        </div>
        <div>
          <iframe
            width="450"
            height="270"
            src="https://www.youtube.com/embed/a38imldPQYc?autoplay=1"
            title="bpartners_video"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

Welcome.propTypes = {
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
