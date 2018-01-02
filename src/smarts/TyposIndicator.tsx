import typosProvider from "@smarts/typosProvider";

import { Value } from "@views/Indicator";
import TyposIndicatorView from "@views/TyposIndicator";

import * as React from "react";

const TyposValue = typosProvider(Value);

const TyposIndicator = () => (
  <TyposIndicatorView>
    <TyposValue />
  </TyposIndicatorView>
);

export default TyposIndicator;
