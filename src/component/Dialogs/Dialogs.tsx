import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import { DialogsPageType } from '../../redux/state';


type DialogsPropsType = {
    dialogs: DialogsPageType
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogsItem = props.dialogs.dialog
        .map((props) => <DialogItem {...props}/>)

    const messagesItem = props.dialogs.messages
        .map((props) => <Message {...props}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
        </div>
    )
}

export default Dialogs;