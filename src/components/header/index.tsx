import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <h2>My Header</h2>
    <Link to="/catalog">Главная</Link>
    <Link to="/cart">Корзина</Link>
  </div>
);
export default Header;
