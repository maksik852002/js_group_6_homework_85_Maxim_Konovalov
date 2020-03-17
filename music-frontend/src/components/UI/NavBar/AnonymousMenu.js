import React from "react";
import { NavLink } from "react-router-dom";

const AnonymousMenu = ({click, clicked}) => {
  let menu = "dropdown-menu dropdown-menu-right"
  clicked && (menu += " show")
  return (
    <button onClick = {click} className= 'anonymyos-dropdown dropdown'>
      <span className="dropdown-toggle">
        Войти
      </span>
      <div className={menu} style={{marginTop: '20px'}}>
      <NavLink className="nav-link" to="/register">
        Зарегистрироваться
      </NavLink>
      <NavLink className="nav-link" to="/login">
        Войти
      </NavLink>
      </div>
    </button>
  );
};

export default AnonymousMenu;