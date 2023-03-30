import React from "react";
import Profile from "./Profile";
import {getUserProfile} from "../../redux/profile_reducer";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {compose} from "redux";
import {getStatus, updateStatus, savePhoto} from "../../redux/profile_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {saveProfile} from "../../redux/profile_reducer";



class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile();
        }
    }

    render() {

        return <Profile {...this.props}
                        isOwner={!this.props.router.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
                        savePhoto={this.props.savePhoto}/>
    }
}

let mapStateToProps = (state) => ( {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
} );

export function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return  <Component
                {...props}
            router={{location, navigate, params}} />
    }

    return ComponentWithRouterProp;
}


export default compose(
    connect( mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
      withRouter, withAuthRedirect ) (ProfileContainer);
