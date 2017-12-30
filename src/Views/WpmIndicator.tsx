import Indicator from "@Views/Indicator";

import * as React from "react";

type Wpm = ({ wpm }: { wpm: number }) => JSX.Element;

const Wpm: Wpm = ({ wpm }) => (
  <Indicator value={wpm} label="WORDS PER MINUTE" />
);

export default Wpm;
