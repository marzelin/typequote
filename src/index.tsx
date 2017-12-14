import { injectGlobal } from "emotion";
import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "react-emotion";
import Controls from "./Controls";
import Indicators from "./Indicators";
import Masthead from "./Masthead";
import TypingBox from "./TypingBox";

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

const App = () => (
  <Void>
    <Masthead />
    <Container>
      <Indicators />
      <TypingBox />
      <Controls />
    </Container>
  </Void>
);

ReactDOM.render(<App />, document.getElementById("root"));
