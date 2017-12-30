import * as React from "react";
import { connect } from "react-redux";
import { newQuote } from "../actionCreators";
import { IStoreState } from "../store";
import { ButtonRight } from "./Views/Button";

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
