import * as React from "react";
import styled from "react-emotion";
import Typos from "../Containers/TyposIndicator";
import Wpm from "../Containers/WpmIndicator";

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
