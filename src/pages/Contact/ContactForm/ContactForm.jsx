import React from 'react';

import TextField from '@mui/material/TextField';

import { Button } from '../../../common/components/Button';

export function ContactForm() {
  return (
    <div style={{ position: 'relative' }}>
      <section className="contact-form section">
        <div className="contact-form__container bd-container">
          <div className="contact-form__col1">
            <h2 className="contact-form__title">L'équipe BPartners</h2>
            CONTACT ACCUEIL
            <ul style={{ marginBlock: '1rem' }}>
              <li>
                <i className="fa fa-phone" />
                <u>01 82 07 72 28</u>
              </li>
              <li>
                <i className="fa fa-envelope" />
                <a href="mailto:contact@bpartners.app">
                  <u>contact@bpartners.app</u>
                </a>
              </li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              ADRESSE <br />8 rue Puget 75018 à 27 rue du chemin vert, 75011, Paris.
            </p>
          </div>
          <div className="contact-form__col2">
            <div style={{ display: 'flex' }}>
              <TextField
                sx={{
                  width: '50%',
                  marginRight: '1%',
                  marginBottom: '.5rem',
                  fontSize: '.8rem',
                  backgroundColor: 'white',
                }}
                label="Nom"
                type="text"
                variant="outlined"
              />
              <TextField
                sx={{
                  width: '50%',
                  marginBottom: '.5rem',
                  fontSize: '.8rem',
                  backgroundColor: 'white',
                }}
                label="Prénom"
                type="text"
                variant="outlined"
              />
            </div>
            <TextField
              sx={{
                width: '100%',
                marginBottom: '.5rem',
                fontSize: '.8rem',
                backgroundColor: 'white',
              }}
              label="Email"
              type="mail"
              variant="outlined"
            />
            <TextField
              sx={{
                width: '100%',
                marginBottom: '.5rem',
                fontSize: '.8rem',
                backgroundColor: 'white',
              }}
              label="Sujet"
              type="textarea"
              variant="outlined"
            />
            <TextField
              sx={{
                width: '100%',
                marginBottom: '.5rem',
                fontSize: '.8rem',
                backgroundColor: 'white',
              }}
              label="Commentaire"
              type="textarea"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button type="submit" label="Envoyer" preset="registration-button" />
          </div>
        </div>
      </section>
      <div
        style={{
          backgroundColor: 'rgb(235, 235, 235)',
          height: '6.1rem',
          position: 'absolute',
          bottom: '-6rem',
          width: '100%',
          zIndex: '-1',
        }}
      >
        {' '}
      </div>
    </div>
  );
}
