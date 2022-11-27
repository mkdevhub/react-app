import { NavLink } from "react-router-dom";

function Menu(props) {
  let currentClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  return (
    <div className="navbar-nav">
      {props.menuList.map((link) => {
        return (
          <NavLink key={link.id} className={currentClass} to={link.url}>
            {link.page}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Menu;
