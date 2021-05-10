import React from "react";
import {Redirect} from "react-router";


export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/Login'}/>

            return <Component {...this.props} />
        }
    }
    return RedirectComponent

}