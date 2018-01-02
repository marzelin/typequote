import wpmProvider from "@smarts/wpmProvider";

import { Value } from "@views/Indicator";
import WpmIndicatorView from "@views/WpmIndicator";

import * as React from "react";

const WpmValue = wpmProvider(Value);

const WpmIndicator = () => (
  <WpmIndicatorView>
    <WpmValue />
  </WpmIndicatorView>
);

export default WpmIndicator;
