import getStore from "@appState/store";
import AppView from "@Views/App";
import * as React from "react";
import { Provider } from "react-redux";

const store = getStore();

const App = () => (
  <Provider store={store}>
    <AppView />
  </Provider>
);

export default App;
