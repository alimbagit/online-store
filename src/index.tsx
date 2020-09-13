//import "./styles/app.scss";
import React from "react";
import { render } from "react-dom";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Catalog from "./pages/catalog";
import Cart from "./pages/cart";
import Chekout from "./pages/chekout";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import thunk from "redux-thunk";
// import { forbidenWordsMiddleware } from "./redux/middleware";

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk, forbidenWordsMiddleware)
// );
const store = createStore(rootReducer);

const Index = () => (
  <Provider store={store}>
    <Router>
      <Route exact strict path="/" component={Catalog} />
      <Route path="/catalog" component={Catalog} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/checkout" component={Chekout} />
    </Router>
  </Provider>
);
export default Index;

render(<Index />, document.getElementById("root"));
