import * as React from "react";
import { Provider } from "react-redux";
import "../globalStyles";
import getStore from "../store";
import Buttons from "./Buttons";
import InputGetter from "./InputGetter";
import QuoteBox from "./QuoteBox";
import Indicators from "./Views/Indicators";
import MainContainer from "./Views/MainContainer";
import Masthead from "./Views/Masthead";

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
