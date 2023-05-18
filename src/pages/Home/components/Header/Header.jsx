/* eslint-disable no-restricted-globals */
import React from 'react';
import * as PropTypes from 'prop-types';
import {NavLink, useNavigate} from 'react-router-dom';
import {useScrollPosition, useTagManager, useToggle} from '../../../../utils/hooks';
import '../../assets/css/forms.css';
import logo from '../../assets/img/logoFullWhite.webp';

export function Header(props) {
    const {pathName} = props;

    const [menuActive, toggleMenuActive] = useToggle(false);

    const navigate = useNavigate();

    const handleTagManager = useTagManager();

    const scrollPosition = useScrollPosition();

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
            <nav className="nav" style={{
                backgroundImage: "url('../../assets/img/VAGUE.jpg')"
            }}>
                <button type="button" className="nav__logo" onClick={() => navigate('/home')}>
                    <a href="#home">
                        <img src={logo} alt="logo" width='170' height='55.01'/>
                    </a>
                </button>
                <div
                    className={`nav__menu ${menuActive ? 'show-menu-container' : ''}`}
                    onClick={toggleMenuActive}
                    onKeyDown={toggleMenuActive}
                    role="button"
                    tabIndex={0}
                >
                    <div
                        className={`nav__menu ${menuActive ? 'show-menu' : ''}`}
                        onClick={(e) => e.stopPropagation()}
                        onKeyDown={(e) => e.stopPropagation()}
                        role="button"
                        tabIndex={0}
                        id="nav-menu"
                    >
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
                                <button
                                    type="button"
                                    className="navigation-button"
                                    onClick={() => {
                                        handleTagManager('blog-navigation');
                                    }}
                                    id="blog-navigation">
                                    <a name="link-4" href={process.env.REACT_APP_BLOG_URL}>
                                        Blog
                                    </a>
                                </button>
                            </li>
                            <li className="nav-bar-link">
                                <button
                                    type="button"
                                    className="navigation-button"
                                    onClick={() => {
                                        handleTagManager('dashboard-navigation');
                                    }}
                                    id='dashboard-navigation'>
                                    <a name="link-5" href={process.env.REACT_APP_DASHBOARD_LOGIN_URL}>
                                        Se connecter
                                        <i className="fa fa-user" style={{marginLeft: '.6rem'}}/>
                                    </a>
                                </button>
                            </li>
                            <li className="nav-bar-link">
                                <button
                                    type="button"
                                    className="navigation-registration-button"
                                    onClick={() => {
                                        handleTagManager('dashboard-registration-navigation');
                                    }}
                                    id='dashboard-registration-navigation'>
                                    <a name="link-6" href={process.env.REACT_APP_DASHBOARD_REGISTRATION_URL}>
                                        Je m'inscris
                                    </a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <button className="nav__toggle toggle-wrapper" id="nav-toggle" onClick={toggleMenuActive} type="button">
                    <i className="fa fa-bars" style={{color: "white"}}/>
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
