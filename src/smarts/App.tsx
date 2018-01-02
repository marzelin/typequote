import getStore from "@state/store";

import ButtonGroup from "@smarts/ButtonGroup";
import Indicators from "@smarts/Indicators";
import InputGetter from "@smarts/InputGetter";
import QuoteBox from "@smarts/QuoteBox";

import AppView from "@views/App";

import * as React from "react";
import { Provider } from "react-redux";

const store = getStore();

const App = () => (
  <Provider store={store}>
    <AppView AfterMain={InputGetter}>
      <Indicators />
      <QuoteBox />
      <ButtonGroup />
    </AppView>
  </Provider>
);

export default App;
