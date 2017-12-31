import { newQuote } from "@state/actionCreators";
import { IStoreState } from "@state/store";

import { ButtonRight } from "@Views/Button";

import * as React from "react";
import { connect } from "react-redux";

const mapDispatch = {
  onClick: newQuote
};

const mapState = ({ isPlaying }: IStoreState) => ({ isPlaying });

interface IParams {
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => any;
  isPlaying: boolean;
}

const NewQuoteButton = ({ onClick, isPlaying }: IParams) => {
  let text = "New Quote";
  if (!isPlaying) {
    text += " (n)";
  }

  return <ButtonRight onClick={onClick}>{text}</ButtonRight>;
};

export default connect(mapState, mapDispatch)(NewQuoteButton);
