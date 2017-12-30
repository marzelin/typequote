import { IStoreState } from "@appState/store";
import convertWhitespace from "@helpers/convertWhitespace";
import Char from "@Views/QuoteChar";
import TextView from "@Views/QuoteText";
import * as React from "react";
import { connect } from "react-redux";

const mapState = ({ text: [text], current, isPlaying, typos }: IStoreState) => {
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
  typos: Set<number>;
  isPlaying: boolean;
}

const Text = ({ text, current, typos, isPlaying }: IParams) => {
  const chars = text.split("").map((ch, i) => {
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
  return <TextView chars={chars} />;
};

export default connect(mapState)(Text);
