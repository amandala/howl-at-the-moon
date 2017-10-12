import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { createReducers } from "./reducer";
import thunk from "redux-thunk";

import MoonContainer from "./containers/MoonContainer";

const store = createStore(createReducers(), applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <MoonContainer />
  </Provider>
);

export default App;
