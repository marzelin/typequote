import NewQuoteButton from "@Containers/NewQuoteButton";
import PlayButton from "@Containers/PlayButton";

import ButtonGroupView from "@Views/ButtonGroup";

import * as React from "react";

const Buttons = () => (
  <ButtonGroupView Left={PlayButton} Right={NewQuoteButton} />
);
export default Buttons;
