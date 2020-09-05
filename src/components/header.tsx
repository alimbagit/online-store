import React from "react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <h2>My Header</h2>
    <Link to="/cart">Корзина</Link>
    <Navbar />
  </div>
);
export default Header;
