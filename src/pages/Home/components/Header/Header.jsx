/* eslint-disable no-restricted-globals */
import React from 'react';
import * as PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from '../../../../config/axios';
import { Button } from '../../../../common/components/Button';
import { useToggle } from '../../../../utils/hooks';
import '../../assets/css/forms.css';
import logo from '../../assets/img/logoFullWhite.png';
import useScrollPosition from '../../../../utils/hooks/useScrollPosition';
import { redirect } from '../../../../utils/redirect';

export function Header(props) {
  const { pathName } = props;
  const [menuActive, toggleMenuActive] = useToggle(false);

  const navigate = useNavigate();

  const scrollPosition = useScrollPosition();

  const onRegistration = () => {
    const initiateOnboarding = async () => {
      const {
        data: { redirectionUrl },
      } = await axios.post('onboardingInitiation', {
        "redirectionStatusUrls": {
          "successUrl": process.env.REACT_APP_SUCCESS_URL,
          "failureUrl": process.env.REACT_APP_FAILURE_URL
        }
      });
      redirect(redirectionUrl);
    };
    initiateOnboarding();
  }

  const makeStyle = () => {
    if (scrollPosition !== 0) {
      return {
        background: 'linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3))'
      }
    }
    if (pathName === '/home') {
      return {
        background: "transparent"
      }
    }
    return {
      background: "rgba(156, 37, 90, 1)"
    }
  }
  return (
    <header className="l-header" id="header"
      style={makeStyle()}
    >
      <nav className="nav bd-container" style={{ backgroundImage: "url('../../assets/img/VAGUE.jpg')" }}>
        <button type="button" className="nav__logo" onClick={() => navigate('/home')}>
          <a href="#home">
            <img src={logo} alt="logo" style={{ width: '10.625rem' }} />
          </a>
        </button>
        <div className={`nav__menu ${menuActive ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li>
              <NavLink className="nav-bar-link" to="/home">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-bar-link" to="/about">
                À propos
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-bar-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-bar-link">
              <a name="link-4" href={process.env.REACT_APP_BLOG_URL}>
                Blog
              </a>
            </li>
            <li className="nav-bar-link">
              <a name="link-5" href={process.env.REACT_APP_DASHBOARD_LOGIN_URL}>
                Se connecter
                <i className="fa fa-user" style={{ marginLeft: '.6rem' }} />
              </a>
            </li>
            <li className="nav__item" id="open-account">
              <Button
                type="submit"
                label="Je m'inscris"
                onClick={onRegistration}
                preset="onboarding-button"
              />
            </li>
          </ul>
        </div>
        <button className="nav__toggle toggle-wrapper" id="nav-toggle" onClick={toggleMenuActive} type="button">
          <i className="bx bx-grid-alt" style={{ color: "white" }} />
        </button>
      </nav>
    </header>
  );
}
Header.propTypes = {
  pathName: PropTypes.string,
}
Header.defaultProps = {
  pathName: '',
};