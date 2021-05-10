import React from "react";

type ProfileStatusPropsType = {
    status: string
}
type ProfileStatusStateType = {
    editMode: boolean
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status}
                    </span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input value={this.props.status}
                           onBlur={this.deactivateEditMode}
                           autoFocus
                    >
                    </input>
                </div>}
            </>
        )
    }
}

export default ProfileStatus