import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
const Navbar = () => (
  <div>
      <ul>
        <li>
          <Link to="/">Main page catalog</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Chekout</Link>
        </li>
      </ul>
  </div>
);
export default Navbar;
