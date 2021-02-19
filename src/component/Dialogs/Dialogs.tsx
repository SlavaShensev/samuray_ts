import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {
    DialogsPageType,
    DispatchActionsType
} from '../../redux/store';
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reduser";

type DialogsPropsType = {
    dialogs: DialogsPageType
    dispatch: (action: DispatchActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const dialogsItem = props.dialogs.dialog
        .map((props) => <DialogItem key={props.id} {...props}/>)
    const messagesItem = props.dialogs.messages
        .map((props) => <Message key={props.id} {...props}/>)

    const newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.dispatch(addMessageAC(props.dialogs.newMessage))
        props.dispatch(updateNewMessageAC(props.dialogs.newMessage))
    }

    const onMessageChange = () => {
        const message = newMessage.current ? newMessage.current.value : '----'
        props.dispatch(updateNewMessageAC(message))
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
                      onChange={onMessageChange}
                      className={s.inputDialog}
                      value={props.dialogs.newMessage}
            />
            <button className={s.button}
                    onClick={addMessage}>
                click me
            </button>
        </div>
    )
}

export default Dialogs;