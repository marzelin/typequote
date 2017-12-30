import NewQuoteButton from "@Containers/NewQuoteButton";
import PlayButton from "@Containers/PlayButton";

import ButtonGroupView from "@Views/ButtonGroup";

import * as React from "react";

export default () => (
  <ButtonGroupView Left={PlayButton} Right={NewQuoteButton} />
);
