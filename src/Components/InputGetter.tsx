import * as React from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import { handleInput, startTyping as startTypingAC } from "../actionCreators";

const HiddenTextarea = styled("textarea")`
  position: fixed;
  top: -100%;
  left: -100%;
`;

interface IProps {
  isPlaying: boolean;
  inputHandler: (char: string) => any;
  startTyping: typeof startTypingAC;
}

const mapStateToProps = ({ isPlaying }: { isPlaying: boolean }) => {
  return { isPlaying };
};

const mapDispatchToProps = {
  inputHandler: handleInput,
  startTyping: startTypingAC
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ isPlaying, inputHandler, startTyping }: IProps) => {
    const onChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
      inputHandler(e.currentTarget.value);
      e.currentTarget.value = "";
    };
    const startTypingOnEnter = (
      e: React.SyntheticEvent<HTMLTextAreaElement>
    ) => {
      if (e.currentTarget.value === "\n") {
        startTyping();
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
