import * as React from "react";
import { IndicatorContainer, Label, Value } from "./Indicator";

const Wpm = ({ wpm }: { wpm: number }) => (
  <IndicatorContainer>
    <Value>{wpm}</Value>
    <Label>WORDS PER MINUTE</Label>
  </IndicatorContainer>
);

export default Wpm;
