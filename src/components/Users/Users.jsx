import React from "react";
import s from "./Users.module.css";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";
import Paginator from "./Paginator";

const Users = (props) => {

    let usersElements = props.users.map(e => {
        return <User key={e.id} id={e.id} friend={e.followed} ava={e.photos.small} name={e.name} status={e.status} addFriend={props.addFriend} removeFriend={props.removeFriend} followingInProgress={props.followingInProgress} toggleFollowingInProgress={props.toggleFollowingInProgress} followTC={props.followTC} unfollowTC={props.unfollowTC}/>
    });

    return (
        <div>
            <div className={s.Users}>
                <h3>Users</h3>
                <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
                {props.isFetching ? <Preloader/> : null}
                <div className={s.usersBlock}>
                    {usersElements}
                </div>
            </div>
        </div>
    )
}

export default Users;