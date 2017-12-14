import * as React from "react";
import styled from "react-emotion";
import Char from "./Char";
import Corrector from "./Corrector";

const pseudoElementsStyles = `
    background-color: #fff;
    visibility: visible;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
    border: 1px solid rgba(34, 36, 38, 0.15);
    box-sizing: border-box;
    top: 0;
`;

const Container = styled("div")`
  font-size: 30px;
  font-family: monospace;
  color: gray;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  padding: 1em 1em;
  border-radius: 0.28571429rem;
  border: 1px solid rgba(34, 36, 38, 0.15);
  margin-bottom: 1rem;

  :before {
    transform: rotate(-1.2deg);
    z-index: -2;
    ${pseudoElementsStyles};
  }

  :after {
    transform: rotate(1.2deg);
    z-index: -1;
    ${pseudoElementsStyles};
  }
`;

const Typer = styled("textarea")`
  position: fixed;
  top: -100%;
  left: -100%;
`;

interface IState {
  current: number;
  text: string;
  typos: Set<number>;
}

const renderer = (current: number, typos: Set<number>, i: number) => (
  char: string,
  lift: boolean
) => (
  <Char
    key={i}
    current={i === current}
    typo={typos.has(i)}
    completed={i < current}
    lift={lift}
  >
    {char}
  </Char>
);

export default class TypingBox extends React.Component<{}, IState> {
  public state: IState = {
    current: 0,
    text: `We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.`,
    typos: new Set()
  };
  public render() {
    const { text, current, typos } = this.state;
    const chars = text
      .split("")
      .map((ch, i) => (
        <Corrector char={ch} render={renderer(current, typos, i)} />
      ));
    return (
      <Container>
        <Typer autoFocus={true} onChange={this.handleInput} />
        {chars}
      </Container>
    );
  }

  private handleInput = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    e.currentTarget.value = "";
    const { text, typos } = this.state;
    let { current } = this.state;
    if (text[current] === value) {
      current += 1;
    } else {
      typos.add(current);
    }

    this.setState({
      current,
      typos
    });
  };
}
