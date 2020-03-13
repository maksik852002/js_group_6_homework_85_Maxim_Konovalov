import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import './NavBar.css';

class NavBar extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleClose = () => {
    this.setState({ clicked: false });
  };

  render = () => {
    let show = "collapse navbar-collapse justify-content-end";
    this.state.clicked && (show += " d-block");
    return (
      <header className="w-100 border-bottom">
        <nav className="navbar navbar-expand-lg navbar-light py-0" style={{backgroundColor: '#white'}}>
          <div className="container">
            <NavLink className="navbar-brand" to="/artists">
                <img
                  src="https://cache-mskm902.cdn.yandex.net/download.cdn.yandex.net/from/yandex.ru/support/ru/music/files/logo_main.png"
                  alt="logo"
                  width= '213px'
                  height='58px'
                />
            </NavLink>
            <Button
              label={<span className="navbar-toggler-icon"></span>}
              type="button"
              addClass="navbar-toggler"
              click={this.handleClick}
            />
            <div className={show}>
              <ul onClick={this.handleClose} className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="Nav-link-header" to="/artists">
                    Исполнители
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="Nav-link-header" to="/albums">
                    Альбомы
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  };
}

export default NavBar;