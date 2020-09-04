import React from "react";
import Navbar from "./navbar";

const Layout = (props) => (
  <div>
    <h2>My Layout project</h2>

    <Navbar />
    {props.children}
  </div>
);
export default Layout;
