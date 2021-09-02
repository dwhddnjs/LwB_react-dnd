import React from "react";
import "./Header.scss";
import logo from "../../img/logo.png";
import icon from "../../img/icon.png";

function Header() {
  return (
    <div className="home-header">
      <img src={icon} alt="" />
      <div className="home-title">LwB</div>
    </div>
  );
}

export default Header;
