import React from 'react';
import s from './Header.module.css';
import logo from '../../static/google.svg';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login?: string
}

const Header = (props: HeaderPropsType) => {
    return <header className={s.header}>
        <a href={'#'}>
            <img src={logo} className={s.logo}/>
        </a>

        <div className={s.loginBlock}>
            {props.isAuth ? <h1>{props.login}</h1>
                : <NavLink to={'/login'}>
                    Login
                </NavLink>}
        </div>

    </header>
};

export default Header;