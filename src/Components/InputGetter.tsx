import * as React from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import { handleInput } from "../actionCreators";

const HiddenTextarea = styled("textarea")`
  position: fixed;
  top: -100%;
  left: -100%;
`;

interface IProps {
  isPlaying: boolean;
  inputHandler: (char: string) => any;
}

const mapStateToProps = ({ isPlaying }: { isPlaying: boolean }) => {
  return { isPlaying };
};

const mapDispatchToProps = {
  inputHandler: handleInput
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ isPlaying, inputHandler }: IProps) => {
    const onChange = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
      inputHandler(e.currentTarget.value);
      e.currentTarget.value = "";
    };
    return isPlaying ? (
      <HiddenTextarea autoFocus={true} onChange={onChange} />
    ) : null;
  }
);
