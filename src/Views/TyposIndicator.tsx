import { Container, Label, Value } from "@Views/Indicator";

import * as React from "react";

type Typos = ({ typos }: { typos: number }) => JSX.Element;

const Typos: Typos = ({ typos }) => (
  <Container>
    <Label>TYPOS</Label>
    <Value>{typos}</Value>
  </Container>
);

export default Typos;
