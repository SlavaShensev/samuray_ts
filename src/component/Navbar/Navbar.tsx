import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div>
                <a className={s.item} href='/profile'>
                    Profile
                </a>
            </div>
            <div>
                <a className={s.item} href='/dialogs'>
                    Messages
                </a>
            </div>
            <div>
                <a className={s.item} href={'#'}>
                    News
                </a>
            </div>
            <div>
                <a className={s.item} href={'#'}>
                    Music
                </a>
            </div>
        </div>
    )
};

export default Navbar;