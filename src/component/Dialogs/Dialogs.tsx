import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.items}>
                    Slava
                </div>
                <div className={s.items}>
                    Sasha
                </div>
                <div className={s.items}>
                    Elena
                </div>
                <div className={s.items}>
                    Antony
                </div>
                <div className={s.items}>
                    Tom
                </div>
                <div className={s.items}>
                    Olya
                </div>
                <div className={s.items}>
                    Sveta
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hello!
                </div>
                <div className={s.message}>
                    Tony! Where are you go?
                </div>
                <div className={s.message}>
                    Mom, i love you))
                </div>
            </div>
        </div>
    )
}

export default Dialogs;