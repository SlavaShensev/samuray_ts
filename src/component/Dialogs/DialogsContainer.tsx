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

type TypeMapStateToProps = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessage: string

}

const mapStateToProps = (state: AppStateType): TypeMapStateToProps => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialog,
        newMessage: state.dialogsPage.newMessage,
    }
};

interface IDialogsContainerType extends TypeMapStateToProps  {
    messages: MessageType[]
    dialogs: DialogType[]
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
        updateNewMessageAC
    } = props

    return <>
        <Dialogs messages={messages}
                 dialogs={dialogs}
                 newMessage={newMessage}
                 addMessageAC={addMessageAC}
                 updateNewMessageAC={updateNewMessageAC}
        />
    </>
}

const connector = connect(mapStateToProps, {
    addMessageAC,
    updateNewMessageAC
})

export default connector(DialogsContainer)