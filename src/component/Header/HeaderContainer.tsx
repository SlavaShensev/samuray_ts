import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from 'react-redux';
import {setAuthUserDataAC} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    const {id, login, email} = response.data.data
                    console.log(id, login, email)
                    console.log('ok')
                    // @ts-ignore
                    this.props.setAuthUserDataAC(id, email, login)
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

export default connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainer);