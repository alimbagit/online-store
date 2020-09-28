import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import LayoutPage from "components/layoutPage";
import { devToolsEnhancer } from 'redux-devtools-extension';

import "styles/main.scss";


const store = createStore(rootReducer, devToolsEnhancer({}));

const Index = () => (
  <Provider store={store}>
    <Router>
      <LayoutPage>
        <div className="main-wrapper">
          <Route exact path="/" component={Catalog} />
          <Route path="/catalog" component={Catalog} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
        </div>
      </LayoutPage>
    </Router>
  </Provider>
);
export default Index;

render(<Index />, document.getElementById("root"));
