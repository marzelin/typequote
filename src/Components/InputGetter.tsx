import * as React from "react";
import { connect } from "react-redux";
import { checkIfCorrect, newQuote, startTyping } from "../actionCreators";
import {
  Fn,
  listenForShortcuts,
  passTypedChar,
  refocusEl
} from "../InputGetterHelpers";
import { IStore } from "../store";
import HiddenTextarea from "./Views/HiddenTextArea";

interface IProps {
  isPlaying: boolean;
  checkIfCorrect: (char: string) => void;
  startTyping: Fn;
  newQuote: Fn;
}

const mapState = ({ isPlaying }: IStore) => ({ isPlaying });

const mapDispatch = {
  checkIfCorrect,
  newQuote,
  startTyping
};

const InputGetter = ({
  isPlaying,
  // tslint:disable:no-shadowed-variable
  checkIfCorrect,
  startTyping,
  newQuote
}: // tslint:enable:no-shadowed-variable
IProps) => {
  const onChange = isPlaying
    ? passTypedChar(checkIfCorrect)
    : listenForShortcuts(startTyping, newQuote);

  return (
    <HiddenTextarea autoFocus={true} onChange={onChange} onBlur={refocusEl} />
  );
};

export default connect(mapState, mapDispatch)(InputGetter);
