import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/redux-store";
import {
    addMessageAC,
    DialogType,
    MessageType,
    updateNewMessageAC
} from "../../redux/dialogs-reducer";
import {Dispatch} from "redux";

type TypeMapStateToProps = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessage: string
}
type TypeMapDispatchToProps = {
    addMessage: () => void
    updateNewMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): TypeMapStateToProps => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialog,
        newMessage: state.dialogsPage.newMessage,
    }
};

const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessage: (text: string) => {
            dispatch(updateNewMessageAC(text))
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer