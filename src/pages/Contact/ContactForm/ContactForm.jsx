import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '../../../common/components/Button';

export function ContactForm() {
    return (
        <section className='contact-form section bd-container'>
            <div className='contact-form__container'>
                <div className='contact-form__col1'>
                    <h2 className='contact-form__title'>L'équipe BPartners</h2>
                    CONTACT ACCUEIL
                    <ul style={{ marginBlock: "1rem" }}>
                        <li>
                            <i className='fa fa-phone' />
                            <u>01 82 07 72 28</u>
                        </li>
                        <li>
                            <i className='fa fa-envelope' />
                            <a href="mailto:contact@bpartners.app"><u>contact@bpartners.app</u></a>
                        </li>
                    </ul>
                    <p style={{ marginTop: '1rem' }}>
                        ADRESSE <br />
                        8 rue Puget 75018
                    </p>
                </div>
                <div className='contact-form__col2'>
                    <div style={{ display: 'flex' }}>
                        <TextField
                            sx={
                                {
                                    width: '50%',
                                    marginRight: '1%',
                                    marginBottom: '.5rem',
                                    fontSize: '.8rem'
                                }
                            }
                            label="Nom"
                            type="text"
                            variant="filled"
                        />
                        <TextField
                            sx={
                                {
                                    width: '50%',
                                    marginBottom: '.5rem',
                                    fontSize: '.8rem'
                                }
                            }
                            label="Prénom"
                            type="text"
                            variant="filled"
                        />
                    </div>
                    <TextField
                        sx={
                            {
                                width: '100%',
                                marginBottom: '.5rem',
                                fontSize: '.8rem'
                            }
                        }
                        label="Email"
                        type="mail"
                        variant="filled"
                    />
                    <TextField
                        sx={
                            {
                                width: '100%',
                                marginBottom: '.5rem',
                                fontSize: '.8rem'
                            }
                        }
                        label="Sujet"
                        type="textarea"
                        variant="filled"
                    />
                    <TextField
                        sx={
                            {
                                width: '100%',
                                marginBottom: '.5rem',
                                fontSize: '.8rem'
                            }
                        }
                        label="Commentaire"
                        type="textarea"
                        variant="filled"
                        multiline
                        rows={4}
                    />
                    <Button type='submit' label="Envoyer" preset="registration-button" />
                </div>
            </div>
        </section>
    )
}
