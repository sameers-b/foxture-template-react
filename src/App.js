import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
// file import
import Shop from "./Pages/react-old/Shop";
// import Cart from "./Pages/react-old/Cart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import BestProduct from "./Components/BestProduct";
import Auth from "./Pages/Auth/Auth";
import Cart from "./Pages/Cart/Cart"
import CheckOut from "./Pages/CheckOut/CheckOut"
// Redux
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
// import routes from './Routes.js';
import authReducer from "./reduxStore/reducers/auth";

// Initialize reducers
const rootReducer = combineReducers({
  auth: authReducer,
});

// Setup store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={BestProduct} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={CheckOut} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
