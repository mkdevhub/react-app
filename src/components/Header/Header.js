import "./Header.scss";

import Cart from "../Cart/Cart";
import MainMenu from "../MainMenu/MainMenu";
import menuData from "../MainMenu/MainMenuData";

import logo from "../../../src/Assets/img/logo.png";

function Header(props) {
  return (
    <div className="main-head">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
          </a>
          <MainMenu menuList={menuData} />
          <Cart count={props.cartQty} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
