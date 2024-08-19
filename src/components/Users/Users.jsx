import React from "react";
import s from "./Users.module.css";
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let usersElements = props.users.map(e => {
        return <User key={e.id} id={e.id} friend={e.followed} ava={e.photos.small} name={e.name} status={e.status} addFriend={props.addFriend} removeFriend={props.removeFriend} followingInProgress={props.followingInProgress} toggleFollowingInProgress={props.toggleFollowingInProgress} followTC={props.followTC} unfollowTC={props.unfollowTC}/>
    });

    return (
        <div>
            <div className={s.Users}>
                <h3>Users</h3>
                <div className={s.pages}>
                    {pages.map(p => {
                        return  <span key={p} className={props.currentPage === p ? s.active : s.innactive} onClick={() => { props.onPageChanged(p) }}>{p}</span>
                    })}
                </div>
                {props.isFetching ? <Preloader/> : null}
                <div className={s.usersBlock}>
                    {usersElements}
                </div>
            </div>
        </div>
    )
}

export default Users;