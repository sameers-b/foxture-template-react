import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
// file import
import Shop from "./Pages/react-old/Shop";
import Cart from "./Pages/react-old/Cart";
import SignIn from './Pages/Auth/SignIn/SignIn'
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
        <Switch>
          <Route path="/" exact component={SignIn} />
          {/* <Redirect from="/" to="/shop" /> */}
          {/* <Route path="/shop" exact component={Shop} />
          <Route path="/" exact component={Cart} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
