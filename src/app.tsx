import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import LayoutPage from "components/layoutPage";
import { devToolsEnhancer } from 'redux-devtools-extension';

import "styles/main.scss";


const store = createStore(rootReducer, devToolsEnhancer({}));

const App = () => (
  <Provider store={store}>
    <Router>
      <LayoutPage>
        <div className="main-wrapper">
          <Redirect path="/" to="/catalog" />
          <Route exact path="/catalog" component={Catalog} />
          <Route path="/catalog/:category" component={Catalog} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
        </div>
      </LayoutPage>
    </Router>
  </Provider>
);
export default App;
