import TyposIndicator from "@smarts/TyposIndicator";
import WpmIndicator from "@smarts/WpmIndicator";

import IndicatorsView from "@views/Indicators";

import * as React from "react";

const Indicators = () => {
  return (
    <IndicatorsView>
      <WpmIndicator />
      <TyposIndicator />
    </IndicatorsView>
  );
};

export default Indicators;
