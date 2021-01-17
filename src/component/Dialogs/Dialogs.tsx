import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.items + ' ' + s.active}>
                    <NavLink to={'/dialogs/1'}>
                        Slava
                    </NavLink>
                </div>
                <div className={s.items + ' ' + s.active}>
                    <NavLink to={'/dialogs/2'}>
                        Sasha
                    </NavLink>
                </div>
                <div className={s.items + ' ' + s.active}>
                    <NavLink to={'/dialogs/3'}>
                        Elena
                    </NavLink>
                </div>
                <div className={s.items + ' ' + s.active}>
                    <NavLink to={'/dialogs/4'}>
                        Antony
                    </NavLink>
                </div>
                <div className={s.items + ' ' + s.active}>
                    <NavLink to={'/dialogs/5'}>
                        Tom
                    </NavLink>
                </div>
                <div className={s.items + ' ' + s.active}>
                    <NavLink to={'/dialogs/6'}>
                        Olya
                    </NavLink>
                </div>
                <div className={s.items + ' ' + s.active}>
                    <NavLink to={'/dialogs/7'}>
                        Sveta
                    </NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello!
                </div>
                <div className={s.message}>
                    Slava! Where are you go?
                </div>
                <div className={s.message}>
                    Are you read React?
                </div>
            </div>
        </div>
    )
}

export default Dialogs;