import React, { ReactHTMLElement } from "react";
import Header from "./header";

interface PropsLayout {
  children: JSX.Element;
}

const Layout: React.FC<PropsLayout> = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
export default Layout;
