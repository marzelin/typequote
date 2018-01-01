import { Container, Label } from "@Views/Indicator";

import * as React from "react";

const Wpm: React.SFC = ({ children }) => (
  <Container>
    {children}
    <Label>WORDS PER MINUTE</Label>
  </Container>
);

export default Wpm;
