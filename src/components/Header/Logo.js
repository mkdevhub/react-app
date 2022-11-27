import { NavLink } from "react-router-dom";

import logoImg from "../../../src/Assets/img/logo.png";

function Logo(props) {
  return (
    <NavLink className="navbar-brand" to="/">
      <img src={logoImg} alt="Logo" />
    </NavLink>
  );
}

export default Logo;
