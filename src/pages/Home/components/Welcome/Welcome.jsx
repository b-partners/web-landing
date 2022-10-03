import React from 'react';

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";

import '../../../../common/components/Modal/Modal.css';
import '../../assets/css/forms.css';
import '../../assets/css/spinner.css';

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
          <span style={{fontWeight: "600"}}> accélère la croissance et les encaissements des artisants
            français.</span>
          <i className="fa fa-screwdriver-wrench" />
        </h1>
        <div className='home__list'>
          <div className='home-list-1'>
            <ul>
              <li
                className='home-list-item'
                style={{ marginBottom: '1rem' }}>
                <div className=' home-list-icon'>
                  <i className='fa fa-money' />
                </div>
                <span
                >
                  Suivre l'ensemble de votre trésorerie et vos objectifs.
                </span>
              </li>
              <li className='home-list-item'>
                <div className=' home-list-icon'>
                  <i className='fa fa-money' />
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
                <div className=' home-list-icon' >
                  <i className='fa fa-money' />
                </div>
                Encaissement de vos factures sur votre mobile.
              </li>
              <li className='home-list-item'>
                <div className=' home-list-icon'>
                  <i className='fa fa-money' />
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
            id="filled-mail-input"
            label="Email"
            type="mail"
            variant="filled"
          />
          <button
            type='button'
            className='registration-button'
          >
            Ça m'interesse
          </button>
        </Paper>

      </div>
      <div className='home__img'>
        <button type='button' className='play-video'>
          VOIR LA VIDEO EXPLICATIVE
          <i className="fa fa-play fa-2x" />
        </button>
      </div>
    </div>
  </section>);
}
