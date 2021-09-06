import React from "react";
import "./Header.scss";
import arm from "../../img/arm.png";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const goToHome = () => {
    history.push("/");
  };
  return (
    <div className="home-header">
      <img src={arm} alt="" />
      <div className="home-title" onClick={goToHome}>
        LwB
      </div>
    </div>
  );
}

export default Header;
