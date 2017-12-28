import * as React from "react";
import { IndicatorContainer, Label, Value } from "./Indicator";

const Typos = ({ typos }: { typos: number }) => (
  <IndicatorContainer>
    <Value>{typos}</Value>
    <Label>TYPOS</Label>
  </IndicatorContainer>
);

export default Typos;
