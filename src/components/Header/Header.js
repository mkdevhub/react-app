import "./Header.scss";

import Logo from "./Logo";
import Cart from "../Cart/Cart";
import MainMenu from "../MainMenu/MainMenu";
import menuData from "../MainMenu/MainMenuData";

function Header(props) {
  return (
    <div className="main-head">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Logo />
          <MainMenu menuList={menuData} />
          <Cart count={props.cartQty} />
        </div>
      </nav>
    </div>
  );
}

export default Header;
