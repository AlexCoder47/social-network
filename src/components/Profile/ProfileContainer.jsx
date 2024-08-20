import React from "react";
import Profile from "./Profile"
import { connect } from "react-redux";
import { getProfileTC, setUserProfile } from "../../redux/profile-reducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getProfileTC(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}


function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {setUserProfile, getProfileTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);