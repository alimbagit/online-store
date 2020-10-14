import React, { ReactHTMLElement } from "react";
import Header from "components/header";

interface PropsLayout {
  children: JSX.Element;
}

/**Такого шаблона придерживаются все страницы приложения */
const Layout: React.FC<PropsLayout> = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);
export default Layout;
