import NewQuoteButton from "@smarts/NewQuoteButton";
import PlayButton from "@smarts/PlayButton";

import ButtonGroupView from "@views/ButtonGroup";

import * as React from "react";

const Buttons = () => (
  <ButtonGroupView Left={PlayButton} Right={NewQuoteButton} />
);
export default Buttons;
