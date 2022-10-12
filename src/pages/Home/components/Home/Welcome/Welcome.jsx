/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import { Button } from '../../../../../common/components/Button/Button';

import '../../../../../common/components/Modal/Modal.css';
import '../../../assets/css/forms.css';
import '../../../assets/css/spinner.css';


export function Welcome() {

  const useStyles = makeStyles({
    field: {
      marginBottom: ".8rem",
      width: "100%"
    }
  });
  const classes = useStyles();

  return (<section className='home' id='home'>
    <div className='home__container bd-container bd-grid'>
      <div className='home__data'>
        <h1 className='home__title'>
          L'assistant virtuel intelligent qui <br />
          <span style={{ fontWeight: "600" }}> accélère la croissance et les encaissements des artisants
            français.</span>
        </h1>
        <div className='home__list'>
          <div className='home-list-1'>
            <ul>
              <li
                className='home-list-item'
                style={{ marginBottom: '1rem' }}>
                <div className='home-list-icon'>
                  <i className="fa fa-dollar" />
                </div>
                <span
                >
                  Suivre l'ensemble de votre trésorerie et vos objectifs.
                </span>
              </li>
              <li className='home-list-item'>
                <div className='home-list-icon'>
                  <i className='fa fa-dollar' />
                </div>
                Un outil de devils, facturation et relance automatisée.
              </li>
            </ul>
          </div>
          <div className='home-list-2'>
            <ul>
              <li
                className='home-list-item'
              >
                <div className='home-list-icon' >
                  <i className='fa fa-dollar' />
                </div>
                Encaissement de vos factures sur votre mobile.
              </li>
              <li className='home-list-item'>
                <div className='home-list-icon'>
                  <i className='fa fa-dollar' />
                </div>
                Un assistant virtuel intelligent qui vous informe des chantiers,
                marché ou dépannages disponible.
              </li>
            </ul>
          </div>
        </div>
        <Paper elevation={5} className="home-registration-form">
          <h2 className='registration-title'>ALORS, TENTÉ ?</h2>
          <TextField
            className={classes.field}
            id="filled-phone-input"
            label="Telephone"
            type="phone"
            variant="filled"
          />
          <TextField
            className={classes.field}
            id="test"
            label="Email"
            type="mail"
            variant="filled"
          />
          <Button type='submit' label="Ça m'interesse" preset="registration-button" />
        </Paper>

      </div>
      <div className='home__img'>
        <video
          controls
          width="460"
          height="240"
          src={process.env.REACT_APP_BPARTNERS_VIDEO_URL}
        />
      </div>
    </div>
  </section>);
}
