import { injectGlobal } from "emotion";
import * as React from "react";
import styled from "react-emotion";
import { Provider } from "react-redux";
import createStore from "../store";
import Buttons from "./Buttons";
import Indicators from "./Indicators";
import InputGetter from "./InputGetter";
import Masthead from "./Masthead";
import QuoteBox from "./QuoteBox";

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  html {
    font-size: 14px;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #39464E;
  }
`;

const Container = styled("div")`
  width: 933px;
  margin-left: auto;
  margin-right: auto;
`;

const Void = ({ children }: { children: React.ReactNode }): JSX.Element =>
  children as JSX.Element;

const store = createStore();

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
