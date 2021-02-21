import React from "react";
import s from './../Dialogs.module.css'
import {MessageType} from "../../../redux/dialogs-reduser";

const Message = (props: MessageType) => {
    return (
        <div className={s.items}>
            {props.message}
        </div>
    )
}

export default Message;