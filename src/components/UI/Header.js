import React from "react";
import "./Header.scss";
import arm from "../../img/arm.png";

function Header() {
  return (
    <div className="home-header">
      <img src={arm} alt="" />
      <div className="home-title">LwB</div>
    </div>
  );
}

export default Header;
