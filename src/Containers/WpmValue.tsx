import WpmProvider from "@Containers/WpmProvider";

import { Value } from "@Views/Indicator";

import * as React from "react";

const renderer = (wpm: number) => <Value>{wpm}</Value>;

const WpmValue: React.SFC = () => <WpmProvider render={renderer} />;

export default WpmValue;
