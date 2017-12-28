import * as React from "react";
import { Provider } from "react-redux";
import "../globalStyles";
import getStore from "../store";
import Buttons from "./Buttons";
import Indicators from "./Indicators";
import InputGetter from "./InputGetter";
import QuoteBox from "./QuoteBox";
import Container from "./Views/AppContainer";
import Masthead from "./Views/Masthead";

const store = getStore();

export default () => (
  <Provider store={store}>
    <React.Fragment>
      <Masthead />
      <Container>
        <Indicators />
        <QuoteBox />
        <Buttons />
      </Container>
      <InputGetter />
    </React.Fragment>
  </Provider>
);
