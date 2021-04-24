import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessage: string
    addMessageAC: () => void
    updateNewMessageAC: (text: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
    const dialogsItem = props.dialogs
        .map((item) => <DialogItem key={item.id}
                                   id={item.id}
                                   name={item.name}/>)
    const messagesItem = props.messages
        .map((props) => <Message key={props.id}
                                 {...props}/>)

    const newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.addMessageAC()
        props.updateNewMessageAC(props.newMessage)
    }

    const onMessageChange = () => {
        const message = newMessage.current ? newMessage.current.value : '----'
        props.updateNewMessageAC(message)
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
                      value={props.newMessage}
            />
            <button className={s.button}
                    onClick={addMessage}>
                click me
            </button>
        </div>
    )
}

export default Dialogs;