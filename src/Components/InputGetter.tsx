import * as React from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import {
  handleInput,
  newQuote as newQuoteAC,
  startTyping as startTypingAC
} from "../actionCreators";

const HiddenTextarea = styled("textarea")`
  position: fixed;
  top: -100%;
  left: -100%;
`;

interface IProps {
  isPlaying: boolean;
  inputHandler: (char: string) => any;
  startTyping: typeof startTypingAC;
  newQuote: typeof newQuoteAC;
}

const mapStateToProps = ({ isPlaying }: { isPlaying: boolean }) => {
  return { isPlaying };
};

const mapDispatchToProps = {
  inputHandler: handleInput,
  newQuote: newQuoteAC,
  startTyping: startTypingAC
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ isPlaying, inputHandler, startTyping, newQuote }: IProps) => {
    const onChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
      inputHandler(e.currentTarget.value);
      e.currentTarget.value = "";
    };
    const startTypingOnEnter = (
      e: React.SyntheticEvent<HTMLTextAreaElement>
    ) => {
      if (e.currentTarget.value === "\n") {
        startTyping();
      } else if (e.currentTarget.value === "n") {
        newQuote();
      }
      e.currentTarget.value = "";
    };
    const focusEl = (el: HTMLTextAreaElement) => {
      if (el) {
        el.focus();
      }
    };
    const focusEl2 = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
      e.currentTarget.focus();
    };

    return (
      <HiddenTextarea
        autoFocus={true}
        onChange={isPlaying ? onChange : startTypingOnEnter}
        onBlur={focusEl2}
        innerRef={focusEl}
      />
    );
  }
);
