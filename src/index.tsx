import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import Chekout from "./pages/chekout";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import LayoutPage from "components/layoutPage";

const store = createStore(rootReducer);

const Index = () => (
  <Provider store={store}>
    <Router>
      <LayoutPage>
        <>
          <Route exact path="/" component={Catalog} />
          <Route path="/catalog" component={Catalog} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Chekout} />
        </>
      </LayoutPage>
    </Router>
  </Provider>
);
export default Index;

render(<Index />, document.getElementById("root"));
