import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    dialogs: DialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {
    const dialogsItem = props.dialogs.dialog
        .map((props) => <DialogItem key={props.id} {...props}/>)
    const messagesItem = props.dialogs.messages
        .map((props) => <Message key={props.id} {...props}/>)

    const newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        const message = newMessage.current?.value
        alert(message)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsItem}
            </div>
            <div className={s.messages}>
                {messagesItem}
            </div>
            <textarea ref={newMessage}
                      className={s.inputDialog}/>
            <button className={s.button}
                    onClick={addMessage}>
                click me
            </button>
        </div>
    )
}

export default Dialogs;