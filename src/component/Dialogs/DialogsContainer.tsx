import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {TypeStore} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reduser";

type TypeMapStateToProps = {
    messages: any,
    dialogs: any,
    newMessage:any
}
type TypeMapDispatchToProps = {
    addMessage:()=>void
    updateNewMessage:(text:string)=>void
}

const mapStateToProps = (state: TypeStore): TypeMapStateToProps => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialog,
        newMessage:state.dialogsPage.newMessage
    }
};

const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
    return {
        addMessage:()=>{
            dispatch(addMessageAC())
        },
        updateNewMessage:(text:string)=>{
            dispatch(updateNewMessageAC(text))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer