import * as React from "react";
import { Provider } from "react-redux";
import "../globalStyles";
import getStore from "../store";
import Buttons from "./Buttons";
import Indicators from "./Indicators";
import InputGetter from "./InputGetter";
import Masthead from "./Masthead";
import QuoteBox from "./QuoteBox";
import Container from "./Views/AppContainer";

const Void = ({ children }: { children: React.ReactNode }): JSX.Element =>
  children as JSX.Element;

const store = getStore();

export default () => (
  <Provider store={store}>
    <Void>
      <Masthead />
      <Container>
        <Indicators />
        <QuoteBox />
        <Buttons />
      </Container>
      <InputGetter />
    </Void>
  </Provider>
);
