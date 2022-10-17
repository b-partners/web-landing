import React from 'react'
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { makeStyles } from "@mui/styles";
import { Button } from '../../../common/components/Button';

export function ContactForm() {
    const useStyles = makeStyles({
        half: {
            marginBottom: ".8rem",
            marginRight: "2%",
            width: "46%",
            fontSize: ".8rem"
        },
        full: {
            marginBottom: ".8rem",
            width: "94%",
            fontSize: ".8rem"
        }
    });
    const classes = useStyles();
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
                            <a href="mail"><u>contact@bpartners.app</u></a>
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
                            className={classes.half}
                            label="Nom"
                            type="text"
                            variant="filled"
                        />
                        <TextField
                            className={classes.half}
                            label="Prénom"
                            type="text"
                            variant="filled"
                        />
                    </div>
                    <TextField
                        className={classes.full}
                        label="Email"
                        type="mail"
                        variant="filled"
                    />
                    <InputLabel
                        disableAnimation={false}
                        htmlFor="searchCriteria"
                    >
                        Sujet
                    </InputLabel>
                    <Select
                        id="searchCriteria"
                        className={classes.full}
                        label="Sujet"
                        variant="filled"
                    >
                        <MenuItem value="Candidature spontanée">Candidature spontanée</MenuItem>
                    </Select>
                    <TextField
                        className={classes.full}
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
