import { Container, Label } from "@Views/Indicator";

import * as React from "react";

const Typos: React.SFC = ({ children }) => (
  <Container>
    <Label>TYPOS</Label>
    {children}
  </Container>
);

export default Typos;
