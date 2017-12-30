import InputGetter from "@Containers/InputGetter";
import * as React from "react";
import Buttons from "./ButtonGroup";
import Indicators from "./Indicators";
import MainContainer from "./MainContainer";
import Masthead from "./Masthead";
import QuoteBox from "./QuoteBox";

const App = () => (
  <React.Fragment>
    <Masthead />
    <MainContainer>
      <Indicators />
      <QuoteBox />
      <Buttons />
    </MainContainer>
    <InputGetter />
  </React.Fragment>
);

export default App;