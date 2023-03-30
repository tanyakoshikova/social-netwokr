import React from "react";
import s from './Users.module.css';
import userPhoto from '../../assets/images/userPhoto.png';
import {NavLink} from "react-router-dom";


let User = ( {user, unfollow, follow, followingInProgress} ) => {
            return (
    <div>
          <span>
                     <div>
                         <NavLink to={"/profile/" + user.id}>
                         <img alt={' '} className={s.userPhoto} src={
                             user.photos.small != null ? user.photos.small :
                             userPhoto }/>
                         </NavLink>
                     </div>
                     <div>
                         { user.followed
                             ?  <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={ () => {unfollow(user.id) } } className={s.followed} >
                                 Unfollow </button>

                             :  <button disabled={followingInProgress.some(id => id === user.id)}
                                        onClick={ () => { follow(user.id) } } className={s.followed}>
                                 Follow </button>
                         }
                     </div>
                 </span>
                <span>
                     <span>
                         <div>{user.name}</div>
                         <div>{user.status}</div>
                     </span>
                     <span>
                         <div>{"country"}</div>
                         <div>{"city"}</div>
                      </span>
                </span>
            </div>
            ) }

export default User;
