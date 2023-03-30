import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeclassname={s.activeLink} >Profile</NavLink>
            </div>
            <div  className={`${s.item} ${s.activeLink}`}>
                <NavLink to ="/dialogs" activeclassname={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users">Users</NavLink>
                {/*<NavLink to='/users' className={navData => navData.isActive ? s.activeLink : s.item}>Users</NavLink>*/}
            </div>
        </nav>
    )
}

export default Navbar;
