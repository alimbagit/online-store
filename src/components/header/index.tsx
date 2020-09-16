import React from "react";
import { Link } from "react-router-dom";
import CartInHeader from "./cartInHeader";

const Header = () => (
  <div>
    <Link to="/catalog">Главная</Link>
    <CartInHeader />
  </div>
);
export default Header;
