import Typos from "@Containers/TyposIndicator";
import Wpm from "@Containers/WpmIndicator";

import IndicatorsView from "@Views/Indicators";

import * as React from "react";

const Indicators: React.SFC = () => {
  return (
    <IndicatorsView>
      <Wpm />
      <Typos />
    </IndicatorsView>
  );
};

export default Indicators;
