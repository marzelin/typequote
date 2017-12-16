import * as React from "react";
import styled from "react-emotion";
import { connect } from "react-redux";
import { IStore } from "../store";
import convertWhitespace from "./Logics/convertWhitespace";
import Char from "./Views/Char";
import View from "./Views/QuoteBox";

const mapStateToProps = ({
  text,
  current,
  isCompleted,
  isPlaying,
  typos
}: IStore) => {
  return {
    current,
    isCompleted,
    isPlaying,
    text,
    typos
  };
};

const Author = styled<{ conceal: boolean }, "cite">("cite")`
  display: block;
  position: relative;
  text-align: right;
  margin-top: 10px;
  width: 100%;
  ${({ conceal }) =>
    conceal &&
    `
    :after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #ddd;
      color: #fff;
      box-sizing: border-box;
      padding: 0 10px;
      content: "type quote to reveal the author";
      display: block;
    }
  `};
`;

export default connect(mapStateToProps)(
  ({ text, current, typos, isCompleted, isPlaying }) => {
    const Chars = text[0].split("").map((ch, i) => {
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
    return (
      <View>
        <q>{Chars}</q>
        <Author conceal={!isCompleted}>- {text[1]}</Author>
      </View>
    );
  }
);
