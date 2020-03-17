import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = ({click, user, clicked}) => {
  let menu = "dropdown-menu dropdown-menu-right"
  clicked && (menu += " show")
  return (
    <div onClick = {click} className="user-dropdown">
      <div className="user-wrapper">
        <span className="user-wrapper-item">
          {user.username[0].toLowerCase()}
        </span>
      </div>
      <div className={menu}>
        <p className='pl-3 m-0'>Hello, <b>{user.username}</b> !</p>
        <hr style={{marginTop: '8px'}}/>
          <NavLink className="nav-link" to={`/users/${user._id}/history`}>
            История треков
          </NavLink>
          <NavLink className="nav-link" to={`/users/${user._id}/tracks`}>
            Мои треки
          </NavLink>
         
      </div>
    </div>
  );
};

export default UserMenu;
