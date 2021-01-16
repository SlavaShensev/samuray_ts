import React from 'react';
import h from './Header.module.css';
import logo from '../../static/google.svg';

const Header = () => {
    return (
        <div className = {h.header}>
            <a href={'#'}>
                <img src={logo} className={h.logo}/>
            </a>
        </div>
    )
};

export default Header;