import React from "react";
import "../../styles/main.scss";
import { Link,useLocation } from "react-router-dom";
import logo from "../Logo/Logo.png";

const Header = () => {
  const location = useLocation();
  return (
    <div className="header">
      <div>
        <nav>
          <ul className="nav-links">
            <li className={location.pathname === "/" && "active"}>
              <Link to="/">صفحه اصلی</Link>
            </li>
            <li className={location.pathname === "/facilities" && "active" }>
              <Link to="/facilities">امکانات هتل </Link>
            </li>
            <li className={location.pathname === "/onlinereservation" && "active" }>
              <Link to="/onlinereservation">رزرواسیون آنلاین </Link>
            </li>
            <li className={location.pathname === "/aboutusmore" && "active" }>
              <Link to="/aboutusmore">درباره ما</Link>
            </li>
            <li className={location.pathname === "/contactusmore" && "active" }>
              <Link to="/contactusmore">تماس با ما </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="logo">
        <h1>هتل آریا</h1>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
