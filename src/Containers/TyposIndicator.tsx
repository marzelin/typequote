import typosProvider from "@Containers/typosProvider";

import { Value } from "@Views/Indicator";
import TyposIndicatorView from "@Views/TyposIndicator";

import * as React from "react";

const TyposValue = typosProvider(Value);

const TyposIndicator = () => (
  <TyposIndicatorView>
    <TyposValue />
  </TyposIndicatorView>
);

export default TyposIndicator;
