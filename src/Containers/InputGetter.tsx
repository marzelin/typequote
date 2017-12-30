import {
  checkIfCorrect,
  newQuote,
  startTyping
} from "@appState/actionCreators";
import { IStoreState } from "@appState/store";
import {
  callIfInputMatch,
  Fn,
  focusEl,
  passInputValue
} from "@helpers/InputGetterHelpers";
import HiddenTextarea from "@Views/HiddenTextArea";
import * as React from "react";
import { connect } from "react-redux";

interface IProps {
  isPlaying: boolean;
  onChar: (char: string) => void;
  onEnter: Fn;
  onN: Fn;
}

const InputGetter = ({ isPlaying, onChar, onEnter, onN }: IProps) => {
  const onChange = isPlaying
    ? passInputValue(onChar)
    : callIfInputMatch(onEnter, onN);

  return (
    <HiddenTextarea autoFocus={true} onChange={onChange} onBlur={focusEl} />
  );
};

const mapState = ({ isPlaying }: IStoreState) => ({ isPlaying });

const mapDispatch = {
  onChar: checkIfCorrect,
  onEnter: startTyping,
  onN: newQuote
};

export default connect(mapState, mapDispatch)(InputGetter);
