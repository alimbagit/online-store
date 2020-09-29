import React from "react";
import { Link } from "react-router-dom";
import CartInHeader from "./cartInHeader";
import "./header.scss"

const Header = () => (
  <header>
    <div className="header-wrapper">
      <Link className="button-to-main" to="/catalog">Каталог</Link>
      <CartInHeader />
    </div>
  </header>
);
export default Header;
