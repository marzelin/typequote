import getStore from "@state/store";

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
    <AppView AfterMain={InputGetter}>
      <Indicators />
      <QuoteBox />
      <ButtonGroup />
    </AppView>
  </Provider>
);

export default App;
