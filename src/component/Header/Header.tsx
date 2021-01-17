import React from 'react';
import s from './Header.module.css';
import logo from '../../static/google.svg';

const Header = () => {
    return (
        <div className = {s.header}>
            <a href={'#'}>
                <img src={logo} className={s.logo}/>
            </a>
        </div>
    )
};

export default Header;