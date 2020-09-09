//import "./styles/app.scss";
import React from "react";
import { render } from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import Chekout from "./pages/chekout";

const Index = () => (
  <Router>
    <Route exact path="/" component={Catalog} />
    <Route path="/catalog" component={Catalog} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/checkout" component={Chekout} />
  </Router>
);
export default Index;

render(<Index />, document.getElementById("root"));
