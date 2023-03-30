import React from "react";
import {connect} from "react-redux";
import { requestUsers, follow, setCurrentPage, unfollow, toggleFollowingProgress } from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getUsers,
    getPageSize,
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, { follow, unfollow,
        setCurrentPage, toggleFollowingProgress, getUsers: requestUsers } )(UsersContainer));

 // let mapDispatchToProps = (dispatch) => {
 //     return {
 //         follow: (userId) => {
 //             dispatch(followAC(userId ));
 //         },
 //         unfollow: (userId) => {
 //             dispatch(unfollowAC(userId ));
 //         },
 //         setUsers: (users) => {
 //             dispatch(setUsersAC(users));
 //         },
 //         setCurrentPage: (pageNumber) => {
 //             dispatch(setCurrentPageAC(pageNumber));
 //         },
 //         setTotalUsersCount: (totalCount) => {
 //             dispatch(setUsersTotalCountAC(totalCount));
 //         },
 //         toggleIsFetching: (isFetching) => {
 //             dispatch(toggleIsFetchingAC(isFetching));
 //         } } }


