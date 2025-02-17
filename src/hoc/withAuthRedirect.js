import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


let mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}


export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (this.props.isAuth == false) {
                return <Navigate to="/login" />
            }
            return <Component {...this.props} />

        }
    }
    
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}