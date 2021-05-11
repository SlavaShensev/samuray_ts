import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: any
}
type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        console.log('activateEditMode')
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        console.log('deactivateEditMode')
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('onStatusChange')
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>,
                       prevState: Readonly<ProfileStatusStateType>,
                       snapshot?: any): void {
        debugger
        console.log('componentDidUpdate')

    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || '-----'}
                    </span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input value={this.state.status}
                           onBlur={this.deactivateEditMode}
                           onChange={this.onStatusChange}
                           autoFocus
                    >
                    </input>
                </div>}
            </>
        )
    }
}

export default ProfileStatus