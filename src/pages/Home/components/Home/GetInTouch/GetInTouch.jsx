import React from 'react'
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import { Button } from '../../../../../common/components/Button/Button';

export function GetInTouch() {
    const useStyles = makeStyles({
        field: {
            width: "38%"
        },
        underline: {
            "&&&:before": {
                borderBottom: "none"
            },
            "&&:after": {
                borderBottom: "none"
            }
        }
    });
    const classes = useStyles();
    return (
        <section className='get_in_touch section bd-container'>
            <h2 className='get_in_touch__title'>Rester informé</h2>
            <p>Aujourd'hui les artisans perdent entre 30% et 40% de leur temps sur des tâches administratives</p>
            <div className='get_in_touch__form'>
                <TextField
                    className={classes.field}
                    InputProps={{ classes }}
                    id="filled-mail-input"
                    label="Tapez votre email ici"
                    type="mail"
                    variant="filled"
                />
                <Button type='submit' label="Je m'inscris" preset="get_in_touch__button" />
            </div>
        </section>
    )
}
