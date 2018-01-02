import wpmProvider from "@Containers/wpmProvider";

import { Value } from "@Views/Indicator";
import WpmIndicatorView from "@Views/WpmIndicator";

import * as React from "react";

const WpmValue = wpmProvider(Value);

const WpmIndicator = () => (
  <WpmIndicatorView>
    <WpmValue />
  </WpmIndicatorView>
);

export default WpmIndicator;
