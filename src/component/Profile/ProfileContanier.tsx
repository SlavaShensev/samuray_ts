import React from 'react';
import {connect} from "react-redux";
import Profile from './Profile';
import {TypeStore} from "../../redux/redux-store";
import {Dispatch} from "redux";

type TypeMapStateToProps = {

}
type TypeMapDispatchToProps = {

}
const mapStateToProps = (state: TypeStore): TypeMapStateToProps => {
    return {

    }
}

const mapDispatchToProps = (dispatch: Dispatch): TypeMapDispatchToProps => {
    return {

    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer