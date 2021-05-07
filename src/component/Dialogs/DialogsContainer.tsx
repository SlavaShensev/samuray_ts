import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {
    DialogType,
    MessageType,
    addMessageAC,
    updateNewMessageAC
} from "../../redux/dialogs-reducer";
import React from "react";
import {Redirect} from "react-router";
type TypeMapStateToProps = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessage: string
    isAuth: any
}
const mapStateToProps = (state: AppStateType): TypeMapStateToProps => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialog,
        newMessage: state.dialogsPage.newMessage,
        isAuth: state.auth.isAuth
    }
};
interface IDialogsContainerType extends TypeMapStateToProps {
    messages: MessageType[]
    dialogs: DialogType[]
    isAuth: boolean
    newMessage: string
    addMessageAC: () => void
    updateNewMessageAC: (text: string) => void
}
const DialogsContainer: React.FC<IDialogsContainerType> = props => {
    const {
        messages,
        dialogs,
        addMessageAC,
        newMessage,
        updateNewMessageAC,
        isAuth
    } = props

    return <>
        <Dialogs messages={messages}
                 dialogs={dialogs}
                 newMessage={newMessage}
                 addMessageAC={addMessageAC}
                 updateNewMessageAC={updateNewMessageAC}
                 isAuth={isAuth}
        />
    </>
}
const AuthRedirectComponent = (props: any)=> {

    if (!props.isAuth)
        return <Redirect to={'/Login'}/>

    return <DialogsContainer {...props}  />
}
const connector = connect(mapStateToProps, {
    addMessageAC,
    updateNewMessageAC
})
export default connector(AuthRedirectComponent)