import React from 'react';
import Header from "./Header";
import {connect} from 'react-redux';
import {getUserProfile, setAuthUserDataAC} from "../../redux/auth-reducer";
import {authAPI} from "../../API/api";

class HeaderContainer extends React.Component {

    componentDidMount(): void {
        authAPI.me()
            .then(res => {
                if (res.data.resultCode === 0) {
                    const data = res.data.data

                    // @ts-ignore
                    this.props.setAuthUserDataAC(data)
                }
            })
    }

    render() {
        // @ts-ignore
        return <Header {...this.props} />
    }

};

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {
    setAuthUserDataAC,
    getUserProfile
})(HeaderContainer);