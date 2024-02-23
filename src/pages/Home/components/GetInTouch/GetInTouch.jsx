import React from 'react';
import {makeStyles} from '@mui/styles';
import TextField from '@mui/material/TextField';
import {useMediaQuery} from '@mui/material';
import * as PropTypes from 'prop-types';

import WavesBottomBg from '../../assets/img/waves-bottom-bg.png';
import {Button} from '../../../../common/components/Button/Button';

export function GetInTouch(props) {
    const matches = useMediaQuery('(max-width: 1021px)');

    const useStyles = makeStyles({
        field: {
            width: '70%',
            overflow: 'hidden',
            border: '1px solid white',
            borderBottom: 'none !important',
            borderRadius: '25px 0px 0px 25px'
        },
    });

    const classes = useStyles();
    const {onEmailChange, onEmailRegistration, user} = props;

    return (
        <section className="get_in_touch section">
            <img
                src={WavesBottomBg}
                alt=" "
                loading="lazy"
                style={{
                    position: 'absolute',
                    zIndex: '-1',
                    left: '0',
                    top: '-.05rem',
                    filter: 'brightness(1.05)',
                }}
            />
            <div className="bd-container section">
                <h2 className="get_in_touch__title">Resté informé</h2>
                <p style={{marginBlock: '1.3rem'}}>
                    Aujourd'hui, les artisans consacrent entre 20% à 30% de leur
                    temps à faire des déplacements et des devis. <br/>
                    Restez informé pour gagner plus de clients.
                </p>
                <div className="get_in_touch__form">
                    <div className="form-wrapper">
                        <TextField
                            className={classes.field}
                            sx={matches ? {
                                borderRadius: '25px !important',
                                marginBottom: '.5rem'
                            } : {
                                borderRadius: '25px 0px 0px 25px'
                            }}
                            label="Email"
                            type="mail"
                            variant="filled"
                            name="email"
                            onChange={onEmailChange}
                            value={user && user.email}
                        />
                        <Button
                            type="submit"
                            id="registration-button-2"
                            label="Je m'inscris"
                            preset="get_in_touch__button"
                            onClick={onEmailRegistration}
                        />
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
