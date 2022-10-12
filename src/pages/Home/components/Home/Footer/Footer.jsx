import React from 'react'
import TextField from '@mui/material/TextField';
import { makeStyles } from "@mui/styles";
import logo from '../../../assets/img/logoFullWhite.png';
import { Button } from '../../../../../common/components/Button/Button';

export function Footer() {
  const useStyles = makeStyles({
    field: {
      width: "70%",
      backgroundColor: "white"
    }
  });
  const classes = useStyles();
  return (
    <section className='footer'>
      <div className="footer__container">
        <div className='footer__column'>
          <img src={logo} alt='logo' style={{ width: '10.625rem' }} />
          <p style={{fontWeight: "100"}}>Copyright &copy; B.Partners 2022</p>
        </div>
        <div className='navigation_link'>
          <h4 className='footer_subtitle'>LIENS IMPORTANTS</h4>
          <ul className='navigation_link_list'>
            <li><a href="#share">Présentation</a></li>
            <li><a href="#share">À propos de nous</a></li>
            <li><a href="#share">Nous contacter</a></li>
            <li><a href="#share">Mon compte</a></li>
          </ul>
        </div>
        <div style={{ width: '35%' }}>
          <div className='footer_registration'>
            <h4 className='footer_subtitle'>RESTER INFORMÉ</h4>
            <TextField
              className={classes.field}
              InputProps={{ classes }}
              id="filled-mail-input"
              label="Tapez votre email ici"
              type="mail"
              variant="filled"
            />
            <Button type='submit' label="Je m'inscris" preset="footer_registration__button" />
          </div>
        </div>
      </div>
    </section>
  )
}
