import * as React from "react";
import styled from "react-emotion";
import Typos from "../TyposIndicator";
import Wpm from "../WpmIndicator";

export const Container = styled("div")`
  margin: 5em 0em 3em;
  display: flex;
`;

const Indicators = () => (
  <Container>
    <Typos />
    <Wpm />
  </Container>
);
export default Indicators;
