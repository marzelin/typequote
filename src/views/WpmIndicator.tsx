import { Container, Label } from "@views/Indicator";

import * as React from "react";

const Wpm: React.SFC = ({ children }) => (
  <Container>
    {children}
    <Label>WORDS PER MINUTE</Label>
  </Container>
);

export default Wpm;
