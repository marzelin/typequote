import * as React from "react";
import { Provider } from "react-redux";
import getStore from "../store";
import AppView from "./Views/App";

const store = getStore();

const App = () => (
  <Provider store={store}>
    <AppView />
  </Provider>
);

export default App;
