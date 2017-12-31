import Masthead from "@Views/Masthead";

import * as React from "react";
import styled from "react-emotion";

const MainContainer = styled("main")`
  margin-left: 1em;
  margin-right: 1em;
  @media only screen and (min-width: 768px) {
    width: 723px;
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (min-width: 992px) {
    width: 933px;
  }
  @media only screen and (min-width: 1200px) {
    width: 1127px;
  }
`;

const App: React.SFC<{ AfterMain: React.ComponentType }> = ({
  children,
  AfterMain
}) => (
  <React.Fragment>
    <Masthead />
    <MainContainer>{children}</MainContainer>
    <AfterMain />
  </React.Fragment>
);

export default App;
