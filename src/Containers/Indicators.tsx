import TyposIndicator from "@Containers/TyposIndicator";
import WpmIndicator from "@Containers/WpmIndicator";

import IndicatorsView from "@Views/Indicators";

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
