import * as React from "react";
import { connect } from "react-redux";
import convertWhitespace from "./Logics/convertWhitespace";
import Char from "./Views/Char";
import View from "./Views/QuoteBox";

interface IProps {
  text: string;
  current: number;
  typos: Set<number>;
  isPlaying: boolean;
}

const mapStateToProps = ({ text, current, isPlaying, typos }: IProps) => {
  return {
    current,
    isPlaying,
    text,
    typos
  };
};

export default connect(mapStateToProps)(
  ({ text, current, typos, isPlaying }: IProps) => {
    const Chars = text.split("").map((ch, i) => {
      const [char, lift] = convertWhitespace(ch);
      return (
        <Char
          key={i}
          current={isPlaying && i === current}
          typo={typos.has(i)}
          completed={i < current}
          lift={lift}
        >
          {char}
        </Char>
      );
    });
    return <View>{Chars}</View>;
  }
);
