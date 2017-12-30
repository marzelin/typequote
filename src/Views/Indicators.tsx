import * as React from "react";
import styled from "react-emotion";

export const Container = styled("div")`
  margin: 5em 0em 3em;
  display: flex;
`;

const Indicators: React.SFC = ({ children }) => (
  <Container>{children}</Container>
);
export default Indicators;
