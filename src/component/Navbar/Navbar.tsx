import React from 'react';
import n from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={n.navbar}>
            <div>
                <a className={n.item} href={'#'}>
                    Profile
                </a>
            </div>
            <div>
                <a className={n.item} href={'#'}>
                    Messages
                </a>
            </div>
            <div>
                <a className={n.item} href={'#'}>
                    News
                </a>
            </div>
            <div>
                <a className={n.item} href={'#'}>
                    Music
                </a>
            </div>
        </div>
    )
};

export default Navbar;