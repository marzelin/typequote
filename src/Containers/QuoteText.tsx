import { IStoreState } from "@state/store";

import convertWhitespace from "@helpers/convertWhitespace";

import Char from "@Views/QuoteChar";
import View from "@Views/QuoteText";

import * as React from "react";
import { connect } from "react-redux";

const mapState = ({
  quote: [text],
  current,
  isPlaying,
  typos
}: IStoreState) => {
  return {
    current,
    isPlaying,
    text,
    typos
  };
};

interface IParams {
  text: string;
  current: number;
  typos: number[];
  isPlaying: boolean;
}

const Text = (Comp: React.ReactType) =>
  function QuoteText({ text, current, typos, isPlaying }: IParams) {
    const chars = text.split("").map((ch, i) => {
      const [char, lift] = convertWhitespace(ch);
      return (
        <Char
          key={i}
          current={isPlaying && i === current}
          typo={typos.includes(i)}
          completed={i < current}
          lift={lift}
        >
          {char}
        </Char>
      );
    });
    return <Comp>{chars}</Comp>;
  };

export default connect(mapState)(Text(View));
