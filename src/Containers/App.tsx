import getStore from "@appState/store";
import ButtonGroup from "@Containers/ButtonGroup";
import Indicators from "@Containers/Indicators";
import InputGetter from "@Containers/InputGetter";
import QuoteBox from "@Containers/QuoteBox";

import AppView from "@Views/App";

import * as React from "react";
import { Provider } from "react-redux";

const store = getStore();

const App = () => (
  <Provider store={store}>
    <AppView Outside={InputGetter}>
      <Indicators />
      <QuoteBox />
      <ButtonGroup />
    </AppView>
  </Provider>
);

export default App;
