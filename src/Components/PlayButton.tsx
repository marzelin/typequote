import * as React from "react";
import { connect } from "react-redux";
import { startTyping } from "../actionCreators";
import { IStoreState } from "../store";
import { ButtonLeft } from "./Views/Button";

const mapDispatch = {
  onClick: startTyping
};

const mapState = ({ isPlaying }: IStoreState) => ({
  isPlaying
});

interface IParams {
  isPlaying: boolean;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => any;
}

const PlayButton = ({ isPlaying, onClick }: IParams) => {
  const text = isPlaying ? "Restart" : "Start Typing (↵)";

  return <ButtonLeft onClick={onClick}>{text}</ButtonLeft>;
};

export default connect(mapState, mapDispatch)(PlayButton);
