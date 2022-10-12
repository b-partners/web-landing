/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';

import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import { Button } from '../../../../../common/components/Button/Button';

import '../../../../../common/components/Modal/Modal.css';
import '../../../assets/css/forms.css';
import '../../../assets/css/spinner.css';
import { IconList } from '../../../../../common/components/IconList';


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
          <div className='home__list__col'>
            <ul>
              <IconList icon='fa fa-dollar' listText="Suivi de votre trésorerie et de vos objectifs" />
              <IconList icon='fa fa-dollar' listText="Edition de devis, facture et relance automatisée des impayés" />
            </ul>
          </div>
          <div className='home__list__col'>
            <ul>
              <IconList icon='fa fa-dollar' listText="Encaissement de vos prestations sur mobile et à distance" />
              <IconList
                icon='fa fa-dollar'
                listText="Être informé en temps réel des chantiers, et des demandes de dépannages autour de chez vous"
              />
            </ul>
          </div>
        </div>
        <Paper elevation={5} className="home-registration-form">
          <h2 className='registration-title'>
            Renseignez votre mail et <br />
            rejoignez les artisans de demain.
          </h2>
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
      <div>
        <iframe width="450" height="270" src="https://www.youtube.com/embed/a38imldPQYc?autoplay=1"
          title='Bpart'
          frameBorder="0" allowFullScreen />
      </div>
    </div>
  </section>);
}
