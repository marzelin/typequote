import * as React from "react";
import { Provider } from "react-redux";
import "../globalStyles";
import getStore from "../store";
import InputGetter from "./InputGetter";
import Buttons from "./Views/ButtonGroup";
import Indicators from "./Views/Indicators";
import MainContainer from "./Views/MainContainer";
import Masthead from "./Views/Masthead";
import QuoteBox from "./Views/QuoteBox";

const store = getStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <Masthead />
      <MainContainer>
        <Indicators />
        <QuoteBox />
        <Buttons />
      </MainContainer>
      <InputGetter />
    </React.Fragment>
  </Provider>
);

export default App;
